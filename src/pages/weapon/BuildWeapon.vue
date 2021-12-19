<script setup lang="ts">
import repo from "~/lib/data/repository/GenshinDataRepository";
import { Weapons } from "~/lib/data/Weapons";
import PageContainer from "~/components/PageContainer";

const router = useRouter();
const route = useRoute();

const weapon = repo.getWeapon(route.params.weapon as string) ?? Weapons.error;

onBeforeMount(() => {
  if (weapon.normalizedName === "error") router.push("/weapons");
});
</script>

<template>
  <PageContainer size="sm">
    <p>{{ weapon.name }}</p>
  </PageContainer>
</template>

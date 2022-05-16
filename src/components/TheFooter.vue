<script setup lang="ts">
import VercelLogo from "~/assets/powered-by-vercel.svg?url";
import PageContainer from "./PageContainer";
import FooterSection from "./FooterSection.vue";
import ExternalLink from "./ExternalLink.vue";
import GLink from "./GLink";
import LogoWithLabel from "~/assets/logo-label.svg?component";
import version from "~/version";
</script>

<template>
  <footer class="bg-dark-600 mt-8">
    <PageContainer class="py-12 <sm:mx-5">
      <div w:grid="cols-1 sm:cols-2 xl:cols-4" class="grid gap-12">
        <FooterSection title="Pages">
          <GLink to="/" isRouter gray>Characters</GLink>
          <GLink to="/builds" isRouter gray>Your Builds</GLink>
          <GLink to="/privacy" isRouter gray>Privacy</GLink>
        </FooterSection>
        <FooterSection title="Data Sources">
          <ExternalLink href="http://genshin.honeyhunterworld.com">Honey Hunter World</ExternalLink>
          <ExternalLink href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki">
            Genshin Impact Fandom Wiki
          </ExternalLink>
          <ExternalLink href="https://paimon.moe/"> paimon.moe </ExternalLink>
        </FooterSection>
        <FooterSection title="Images">
          <ExternalLink href="http://genshin.honeyhunterworld.com">Honey Hunter World</ExternalLink>
          <ExternalLink href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki">
            Genshin Impact Fandom Wiki
          </ExternalLink>
        </FooterSection>
        <FooterSection title="Other">
          <GLink to="https://github.com/glaciyan/gscale">Github</GLink>
          <GLink to="https://twitter.com/glaciyandev">@glaciyandev</GLink>
          <span class="">Email (no replies): <GLink to="mailto:yo@gscale.cc" class="!inline">yo@gscale.cc</GLink></span>
        </FooterSection>
      </div>
      <div className="flex mt-24 items-center">
        <LogoWithLabel class="mr-2" />
        <p className="mr-2">v{{ version }}</p>
        <p>by glaciyan</p>
      </div>
      <div class="mt-6">
        <a href="https://vercel.com?utm_source=gscale&utm_campaign=oss">
          <img :src="VercelLogo" width="212" height="44" alt="Powered by Vercel" />
        </a>
      </div>
      <p className="mt-6 text-light-ternary">
        gscale.cc is not affiliated with COGNOSPHERE.
        <br />
        Genshin Impact, game content and materials are trademarks and copyrights of COGNOSPHERE.
      </p>
    </PageContainer>
  </footer>
</template>

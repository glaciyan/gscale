export function useLoadingFunction(func: () => Promise<void>) {
  const loading = ref(false);

  const execute = async () => {
    loading.value = true;

    try {
      await func();
    } finally {
      loading.value = false;
    }
  };

  return { loading, execute };
}

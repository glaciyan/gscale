import { onMounted, Ref, ref } from "vue";

export function useIntersection(element: Ref<any>, threshold = 0.1, rootMargin = "350px") {
  const intersecting = ref(false);

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].intersectionRatio > 0) {
      intersecting.value = true;
    }
  };

  onMounted(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });
    observer.observe(element.value);
  });

  return intersecting;
}

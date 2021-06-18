import { useRouter } from "next/router";

export function useQuery() {
    const router = useRouter();
    if (router.isReady) return router.query;
    return undefined;
}

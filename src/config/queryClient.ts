import { QueryClient } from '@tanstack/react-query';
import { CACHE_TTL } from '../config/cacheConfig';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TTL,
      gcTime: CACHE_TTL * 1.5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

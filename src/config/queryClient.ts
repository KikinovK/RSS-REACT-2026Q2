import { QueryCache, QueryClient } from '@tanstack/react-query';
import { CACHE_TTL } from '../config/cacheConfig';
import { useErrorStore } from '../store/useErrorStore';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error.name === 'AbortError') return;
      console.log('Query error:', error);
      useErrorStore.getState().addError(error.message);
    },
  }),

  defaultOptions: {
    queries: {
      staleTime: CACHE_TTL,
      gcTime: CACHE_TTL * 1.5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

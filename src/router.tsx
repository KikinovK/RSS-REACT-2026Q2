import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { queryClient } from './config/queryClient';

const basePath = import.meta.env.VITE_BASE_PATH || '/';

export const router = createRouter({
  routeTree,
  basepath: basePath,
  context: { queryClient },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

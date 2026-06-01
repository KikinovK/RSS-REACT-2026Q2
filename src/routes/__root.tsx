/* eslint-disable react-refresh/only-export-components */
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../pages/NotFoundPage';
import { QueryClient } from '@tanstack/react-query';

interface MyRouterContext {
  queryClient: QueryClient;
}

const RootLayout = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-deep-space text-stardust font-noigrotesk">
        <Header />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

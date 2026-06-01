
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

// eslint-disable-next-line react-refresh/only-export-components
const TestWrapper = ({ children }: { children: ReactNode }) => {
  const testQueryClient = createTestQueryClient();

  return <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
};

const renderWithProviders = (ui: ReactNode, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(ui, { wrapper: TestWrapper, ...options });
};

export { renderWithProviders };

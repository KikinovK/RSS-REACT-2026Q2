
import { QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import { queryClient } from '../config/queryClient';

// eslint-disable-next-line react-refresh/only-export-components
const TestWrapper = ({ children }: { children: ReactNode }) => {

  queryClient.clear();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const renderWithProviders = (ui: ReactNode, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(ui, { wrapper: TestWrapper, ...options });
};

export { renderWithProviders };

import '@testing-library/jest-dom';
import { queryClient } from './config/queryClient';

afterEach(() => {
  queryClient.clear();
  queryClient.cancelQueries();
});

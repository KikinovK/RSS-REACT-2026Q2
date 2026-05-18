import { createFileRoute } from '@tanstack/react-router';
import HomePage from '../pages/HomePage';
import { z } from 'zod';
import { LIMIT_KEY, OPTIONS_COUNT_ITEMS, PAGE_KEY, SEARCH_KEY } from '../utils/const';
import { getStoredQuery } from '../utils/storage';
import { CountItem } from '../types/CoutItem';

const getDefaultFilter = (): string => {
  return getStoredQuery(SEARCH_KEY) || '';
};

const getDefaultPage = (): number => {
  const saved = Number(getStoredQuery(PAGE_KEY));
  return Number.isNaN(saved) || saved < 1 ? 1 : saved;
};

const getDefaultLimit = (): CountItem => {
  if (typeof window === 'undefined') return OPTIONS_COUNT_ITEMS[0];

  const saved = Number(getStoredQuery(LIMIT_KEY));
  return OPTIONS_COUNT_ITEMS.includes(saved as CountItem)
    ? (saved as CountItem)
    : OPTIONS_COUNT_ITEMS[0];
};

const productsSearchSchema = z.object({
  page: z
    .number()
    .int()
    .positive()
    .catch(() => getDefaultPage()),

  limit: z
    .number()
    .refine((val) => OPTIONS_COUNT_ITEMS.includes(val as CountItem))
    .catch(() => getDefaultLimit())
    .transform((val) => val as CountItem),

  filter: z
    .string()
    .catch(() => getDefaultFilter()),
});

export const Route = createFileRoute('/')({
  validateSearch: (search) => productsSearchSchema.parse(search),
  search: {
    middlewares: [
      ({ search, next }) => {
        return next(search);
      },
    ],
  },
  component: HomePage,
});

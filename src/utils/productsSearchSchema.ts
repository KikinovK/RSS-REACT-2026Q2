import { z } from 'zod';
import { OPTIONS_COUNT_ITEMS } from '../utils/const';
import { CountItem } from '../types/CoutItem';

const productsSearchSchema = z.object({
  page: z.coerce
    .number()
    .int()
    .positive()
    .catch(() => 1)
    .transform((val) => val as number),

  limit: z.coerce
    .number()
    .refine((val) => OPTIONS_COUNT_ITEMS.includes(val as CountItem))
    .catch(() => OPTIONS_COUNT_ITEMS[0])
    .transform((val) => val as CountItem),

  filter: z.string().catch(() => ''),
});

export default productsSearchSchema;

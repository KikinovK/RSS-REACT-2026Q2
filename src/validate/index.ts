import * as z from 'zod';

export type FormData = z.infer<typeof formSchema>;

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  age: z
    .string()
    .min(1, 'Age is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 18 && Number(val) <= 120, {
      message: 'Age must be between 18 and 120',
    }),
  gender: z
    .string()
    .min(1, 'Please select a gender'),
  terms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to the terms and conditions',
    }),
});

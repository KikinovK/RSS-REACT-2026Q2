import * as z from 'zod';

export type FormData = z.infer<typeof formSchema>;

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .refine((val) => val.length > 0 && val[0] === val[0].toUpperCase(), {
      message: 'First letter must be uppercase',
    })
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val) => val.split('@').length === 2, {
      message: 'Email must contain exactly one @ symbol',
    })
    .refine(
      (val) => {
        const parts = val.split('@');
        if (parts.length !== 2) return false;

        const [localPart, domainPart] = parts;

        const isLocalValid = localPart.trim().length > 0;

        const isDomainValid =
          domainPart.includes('.') &&
          !domainPart.startsWith('.') &&
          !domainPart.endsWith('.');

        return isLocalValid && isDomainValid;
      },
      {
        message: 'Email must have a non-empty local part and a valid domain with a dot',
      }
    ),
  age: z
    .string()
    .min(1, 'Age is required').refine((val) => !isNaN(Number(val)) && val.trim() !== '', {
      message: 'Age must be a valid number',
    })
    .refine((val) => Number(val) >= 0, {
      message: 'Age cannot be negative',
    })
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
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

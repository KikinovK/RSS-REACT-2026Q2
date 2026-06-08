import * as z from 'zod';

export type FormData = z.infer<typeof formSchema>;

interface PasswordRequirement {
  id: string;
  message: string;
  validator: (val: string) => boolean;
}

export const passwordRequirements: PasswordRequirement[] = [
  { id: 'min', message: 'At least 8 characters', validator: (val) => val.length >= 8 },
  { id: 'upper', message: 'At least one uppercase letter', validator: (val) => /[A-Z]/.test(val) },
  { id: 'lower', message: 'At least one lowercase letter', validator: (val) => /[a-z]/.test(val) },
  { id: 'number', message: 'At least one number', validator: (val) => /[0-9]/.test(val) },
  { id: 'special', message: 'At least one special character', validator: (val) => /[^A-Za-z0-9]/.test(val) },
];

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .refine((val) => val.length > 0 && val[0] === val[0].toUpperCase(), {
      message: 'First letter must be uppercase',
    }),
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
  password: z.string().superRefine((val, ctx) => {
    passwordRequirements.forEach((req) => {
      if (!req.validator(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: req.message,
        });
      }
    });
  }),
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

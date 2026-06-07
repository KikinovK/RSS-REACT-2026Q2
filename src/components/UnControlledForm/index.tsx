import { useRef, useState, useCallback } from 'react';
import * as z from 'zod';

import Button from '../ui/Button';
import FieldCheckbox from '../ui/FieldCheckbox';
import FieldInput from '../ui/FieldInput';
import FieldSelect from '../ui/FieldSelect';

import { type FormData, formSchema } from '../../validate';

type FieldErrors = Partial<Record<keyof FormData, string>>;

const UnControlledForm = () => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const validateField = useCallback(<K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ): string | undefined => {
    try {
      formSchema.shape[field].parse(value);
      return undefined;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.issues[0].message;
      }
      return undefined;
    }
  }, []);

  const validateAllFields = useCallback((): FormData | null => {
    const formData: FormData = {
      name: nameRef.current?.value || '',
      email: emailRef.current?.value || '',
      age: ageRef.current?.value || '',
      gender: genderRef.current?.value || '',
      terms: termsRef.current?.checked || false,
    };

    const newErrors: FieldErrors = {};

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return null;
    }

    return formData;
  }, [validateField]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitSuccessful(false);

    const formData = validateAllFields();

    if (!formData) {
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted with data:', formData);

    const form = e.target as HTMLFormElement;
    form.reset();
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitSuccessful(true);

    setTimeout(() => setIsSubmitSuccessful(false), 3000);
  };

  const handleBlur = useCallback(<K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    const error = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  }, [validateField]);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-stardust">
        Uncontrolled Form with Zod Validation
      </h2>
      {isSubmitSuccessful && (
        <div className="bg-guidepost-green/20 border border-guidepost-green text-stardust px-4 py-3 rounded-(--radius-buttons) mb-4">
          Form submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <FieldInput
          label="Name"
          id="name"
          ref={nameRef}
          className="mb-4"
          error={errors.name}
          onBlur={() =>
            handleBlur('name', nameRef.current?.value || '')
          }
          autoComplete="name"
        />
        <FieldInput
          label="Email"
          id="email"
          ref={emailRef}
          className="mb-4"
          error={errors.email}
          onBlur={() =>
            handleBlur('email', emailRef.current?.value || '')
          }
          type="email"
          autoComplete="email"
        />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <FieldInput
            label="Age"
            id="age"
            ref={ageRef}
            className="mb-4"
            error={errors.age}
            onBlur={() =>
              handleBlur('age', ageRef.current?.value || '')
            }
            type="number"
            min="18"
            max="120"
          />
          <FieldSelect
            label="Gender"
            id="gender"
            ref={genderRef}
            className="mb-4"
            error={errors.gender}
            onBlur={() =>
              handleBlur('gender', genderRef.current?.value || '')
            }
            options={[
              { value: '', label: 'Select gender' },
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
            placeholder="Select gender"
          />
        </div>
        <FieldCheckbox
          label="I agree to the terms and conditions"
          id="terms"
          ref={termsRef}
          className="mb-4"
          error={errors.terms}
          onChange={() => {
            handleBlur('terms', termsRef.current?.checked || false);
          }}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </>
  );
};

export default UnControlledForm;

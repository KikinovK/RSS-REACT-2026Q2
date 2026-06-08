import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormStore } from '../../store/formStore';
import Button from '../ui/Button';
import FieldAutocomplete from '../ui/FieldAutocomplete';
import FieldCheckbox from '../ui/FieldCheckbox';
import FieldInput from '../ui/FieldInput';
import FieldSelect from '../ui/FieldSelect';
import FieldPasswordFields from '../ui/FieldPasswordFields';
import ImageUploader from '../ui/ImageUploader';
import { type FormData, formSchema } from '../../validate';

interface ControlledFormProps {
  onSubmitSuccess?: () => void;
}

const ControlledForm = ({ onSubmitSuccess }: ControlledFormProps = {}) => {
  const addControlledSubmission = useFormStore((state) => state.addControlledSubmission);
  const countries = useFormStore((state) => state.countries);
  const [imageValidationError, setImageValidationError] = useState<string | undefined>(undefined);
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const passwordValue = watch('password', '');

  const onSubmit = async (data: FormData) => {
    addControlledSubmission(data);
    reset();
    setImageValidationError(undefined);
    setTimeout(() => {
      onSubmitSuccess?.();
    }, 3000);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-stardust text-center">
        Controlled Form with React Hook Form & Zod
      </h2>
      {isSubmitSuccessful && (
        <div className="bg-guidepost-green/20 border border-guidepost-green text-stardust px-4 py-3 rounded-(--radius-buttons) mb-4">
          Form submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="md:grid grid-cols-2 gap-4 w-full">
        <div >
          <FieldInput
            label="Name"
            id="name"
            className="mb-4"
            error={errors.name?.message}
            {...register('name')}
            autoComplete="name"
          />
          <FieldInput
            label="Email"
            id="email"
            className="mb-4"
            error={errors.email?.message}
            {...register('email')}
            type="email"
            autoComplete="email"
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
          <FieldInput
            label="Age"
            id="age"
            className="mb-4"
            error={errors.age?.message}
            {...register('age')}
          />
          <FieldSelect
            label="Gender"
            id="gender"
            className="mb-4"
            error={errors.gender?.message}
            {...register('gender')}
            options={[
              { value: '', label: 'Select gender' },
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
            placeholder="Select gender"
          />
        </div>
        <Controller
          control={control}
          name="country"
          render={({ field, fieldState }) => (
            <FieldAutocomplete
              id="country"
              label="Country"
              className="mb-4"
              options={countries}
              value={field.value ?? ''}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
              placeholder="Type to search country..."
            />
          )}
        />
        </div>
        <div>
          <FieldPasswordFields
            passwordId="password"
            confirmPasswordId="confirmPassword"
            passwordError={errors.password?.message}
            confirmPasswordError={errors.confirmPassword?.message}
            passwordProps={{...register('password'), value: passwordValue}}
            confirmPasswordProps={register('confirmPassword')}
            className="mb-4"
          />
          <Controller
            control={control}
            name="image"
            render={({ field, fieldState }) => (
              <ImageUploader
                id="image"
                label="Profile image"
                className="mb-4"
                value={field.value ?? ''}
                onChange={(val) => {
                  field.onChange(val);
                  if (val) {
                    setImageValidationError(undefined);
                  }
                }}
                onBlur={field.onBlur}
                error={imageValidationError ?? fieldState.error?.message}
                onValidationError={setImageValidationError}
              />
            )}
          />
        </div>




        <FieldCheckbox
          label="I agree to the terms and conditions"
          id="terms"
          className="mb-4 col-span-2"
          error={errors.terms?.message}
          {...register('terms')}
        />
        <Button
          type="submit"
          className="w-full col-span-2"
          disabled={isSubmitting || isSubmitSuccessful}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </>
  );
};

export default ControlledForm;

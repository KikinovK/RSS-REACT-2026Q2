import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../ui/Button';
import FieldCheckbox from '../ui/FieldCheckbox';
import FieldInput from '../ui/FieldInput';
import FieldSelect from '../ui/FieldSelect';
import { type FormData, formSchema } from '../../validate';

const ControlledForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted with data:', data);
    reset();
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-stardust">
        Controlled Form with React Hook Form & Zod
      </h2>
      {isSubmitSuccessful && (
        <div className="bg-guidepost-green/20 border border-guidepost-green text-stardust px-4 py-3 rounded-(--radius-buttons) mb-4">
          Form submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            type="number"
            min="18"
            max="120"
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
        <FieldCheckbox
          label="I agree to the terms and conditions"
          id="terms"
          className="mb-4"
          error={errors.terms?.message}
          {...register('terms')}
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

export default ControlledForm;

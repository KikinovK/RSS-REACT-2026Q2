import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UnControlledForm from './index';
import { useFormStore } from '../../store/formStore';
import { formSchema } from '../../validate';

const validFormData = {
  name: 'John Doe',
  email: 'john@example.com',
  age: '25',
  gender: 'male',
  terms: true,
  password: 'Password1!',
  confirmPassword: 'Password1!',
  country: 'Poland',
  // 1x1 transparent PNG
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
};

const fillForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText(/name/i), validFormData.name);
  await user.type(screen.getByLabelText(/email/i), validFormData.email);
  await user.type(screen.getByLabelText(/^age/i), validFormData.age);
  await user.selectOptions(screen.getByLabelText(/gender/i), validFormData.gender);
  await user.click(screen.getByLabelText(/country/i));
  await user.type(screen.getByLabelText(/country/i), validFormData.country);
  await user.click(screen.getByRole('option', { name: validFormData.country }));
  await user.type(screen.getByLabelText(/^password/i), validFormData.password);
  await user.type(screen.getByLabelText(/confirm password/i), validFormData.confirmPassword);
  await user.click(screen.getByLabelText(/terms/i));
  const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
  const pngBytes = Uint8Array.from(
    atob(validFormData.image.split(',')[1]),
    (c) => c.charCodeAt(0)
  );
  const file = new File([pngBytes], 'pixel.png', { type: 'image/png' });
  await user.upload(fileInput, file);
};

describe('UnControlledForm', () => {
  beforeEach(() => {
    useFormStore.setState({
      controlledSubmissions: [],
      uncontrolledSubmissions: [],
    });
  });

  it('renders the form heading and submit button', () => {
    render(<UnControlledForm />);
    expect(
      screen.getByRole('heading', { name: /uncontrolled form with zod validation/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting an empty form', async () => {
    const user = userEvent.setup();
    render(<UnControlledForm />);

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/age is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a gender/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a country/i)).toBeInTheDocument();
    expect(screen.getByText(/please confirm your password/i)).toBeInTheDocument();
    expect(screen.getByText(/please upload an image/i)).toBeInTheDocument();
    expect(
      screen.getByText(/you must agree to the terms and conditions/i)
    ).toBeInTheDocument();

    expect(useFormStore.getState().uncontrolledSubmissions).toHaveLength(0);
  });

  it('shows a field-level error on blur when the value is invalid', async () => {
    const user = userEvent.setup();
    render(<UnControlledForm />);

    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'lowercase');
    await user.tab();

    expect(
      await screen.findByText(/first letter must be uppercase/i)
    ).toBeInTheDocument();
  });

  it('validates the schema independently of the form component', () => {
    const result = formSchema.safeParse({});
    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((issue) => issue.path[0]);
      expect(messages).toEqual(
        expect.arrayContaining([
          'name',
          'email',
          'age',
          'gender',
          'terms',
          'password',
          'confirmPassword',
          'country',
          'image',
        ])
      );
    }
  });

  it('submits a valid form, stores the data via Zustand, and shows a success message', async () => {
    const user = userEvent.setup();
    render(<UnControlledForm />);

    await fillForm(user);
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText(/form submitted successfully/i)
    ).toBeInTheDocument();

    await waitFor(() => {
      const submissions = useFormStore.getState().uncontrolledSubmissions;
      expect(submissions).toHaveLength(1);
    });

    const submission = useFormStore.getState().uncontrolledSubmissions[0];
    expect(submission.data.name).toBe(validFormData.name);
    expect(submission.data.email).toBe(validFormData.email);
    expect(submission.data.country).toBe(validFormData.country);
    expect(submission.data.image).toBe(validFormData.image);
    expect(submission.data.terms).toBe(true);

    await waitFor(() => {
      expect((screen.getByLabelText(/name/i) as HTMLInputElement).value).toBe('');
    });
    expect((screen.getByLabelText(/email/i) as HTMLInputElement).value).toBe('');
    expect((screen.getByLabelText(/^age/i) as HTMLInputElement).value).toBe('');
    expect((screen.getByLabelText(/^password/i) as HTMLInputElement).value).toBe('');
    expect((screen.getByLabelText(/country/i) as HTMLInputElement).value).toBe('');
    expect(
      (screen.getByLabelText(/terms/i) as HTMLInputElement).checked
    ).toBe(false);
  });
});

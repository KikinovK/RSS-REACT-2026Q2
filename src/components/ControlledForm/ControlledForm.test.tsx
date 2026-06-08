import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ControlledForm from './index';
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

describe('ControlledForm', () => {
  beforeEach(() => {
    useFormStore.setState({
      controlledSubmissions: [],
      uncontrolledSubmissions: [],
    });
  });

  it('renders the form heading and submit button', () => {
    render(<ControlledForm />);
    expect(
      screen.getByRole('heading', { name: /controlled form with react hook form/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
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

  it('rejects mismatched passwords and invalid email at the schema level', () => {
    const result = formSchema.safeParse({
      ...validFormData,
      confirmPassword: 'DifferentPassword1!',
      email: 'not-an-email',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((issue) => issue.path.join('.'));
      expect(messages).toEqual(
        expect.arrayContaining(['confirmPassword', 'email'])
      );
    }
  });

  it('submits a valid form and stores the data via Zustand', async () => {
    const user = userEvent.setup();
    render(<ControlledForm />);

    await fillForm(user);
    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      const submissions = useFormStore.getState().controlledSubmissions;
      expect(submissions).toHaveLength(1);
    });

    const submission = useFormStore.getState().controlledSubmissions[0];
    expect(submission.data.name).toBe(validFormData.name);
    expect(submission.data.email).toBe(validFormData.email);
    expect(submission.data.country).toBe(validFormData.country);
    expect(submission.data.image).toBe(validFormData.image);
    expect(submission.data.terms).toBe(true);
  });

  it('resets the form fields after a successful submission', async () => {
    const user = userEvent.setup();
    render(<ControlledForm />);

    await fillForm(user);
    await user.click(screen.getByRole('button', { name: /submit/i }));

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

  it('invokes the onSubmitSuccess callback after a successful submission', async () => {
    const user = userEvent.setup();
    const onSubmitSuccess = vi.fn();
    render(<ControlledForm onSubmitSuccess={onSubmitSuccess} />);

    await fillForm(user);
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(onSubmitSuccess).not.toHaveBeenCalled();
    await waitFor(
      () => {
        expect(onSubmitSuccess).toHaveBeenCalledTimes(1);
      },
      { timeout: 5000 }
    );
  }, 10000);
});

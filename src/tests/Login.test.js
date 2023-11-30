import { render, screen } from '@testing-library/react';
import Login from '../components/Login';
import userEvent from "@testing-library/user-event";

it('Login Component --> Should have a email,password,and submit button', () => {
  render(<Login />);

  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/Sign In/i);

  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
})

it('Users should be able to submit their credentials', () => {
  const submit = jest.fn();

  render(<Login submit={submit } />);

  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/Sign In/i);

  userEvent.type(emailField, "test");
  userEvent.type(passwordField, 'testing');
  userEvent.click(submitButton);

  //values that user provides are being submitted
  expect(submit).toHaveBeenCalledWith({
    email: "test",
    password: "testing"
  })
})
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../Context/UserContext';

import Auth from './Auth';

test('should render a Login form', () => {
  render(
    <UserProvider>
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    </UserProvider>
  );

  screen.debug();

  const email = screen.getByText(/email:/i);
  const password = screen.getByText(/password:/i);
  const submit = screen.getByRole('button', {
    name: /sign in!/i,
  });

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});

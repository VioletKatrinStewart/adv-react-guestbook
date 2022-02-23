import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './Context/UserContext';
import { EntryProvider } from './Context/EntryContext';
import userEvent from '@testing-library/user-event';

test.skip('test the button leaving a message with a name', async () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );
  const nameInput = screen.getByLabelText(/Guest Name/i);
  const messageInput = screen.getByLabelText(/Guest Entry/i);

  expect(nameInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();

  userEvent.type(nameInput, 'Violet');
  expect(nameInput.value).toBe('Violet');

  userEvent.type(messageInput, 'Hi');
  expect(messageInput.value).toBe('Hi');

  const button = screen.getByRole('button', {
    name: /sign/i,
  });
  expect(button).toBeInTheDocument();

  userEvent.click(button);
  const input = await screen.findByText('Hi');
  const name = screen.getByText('Violet');

  expect(name).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

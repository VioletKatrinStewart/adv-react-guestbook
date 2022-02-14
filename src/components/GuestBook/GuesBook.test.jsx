import GuestBook from './GuestBook';
import { render, screen } from '@testing-library/react';
import { EntryProvider } from '../../Context/EntryContext';
import { UserProvider } from '../../Context/UserContext';

//test 3 that search bar loads
test('the guest entries header loads', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <GuestBook />
      </EntryProvider>
    </UserProvider>
  );
  const header = screen.getByText(/Guest Entries/i);
  expect(header).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';

test('components have behavior', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );

  const userName = screen.getByRole('textbox', { name: /name:/i });
  const name = 'phoenix';
  expect(name).toBe('phoenix');

  const userEntry = screen.getByRole('textbox', { name: /entry:/i });
  const entry = 'hi';
  expect(entry).toBe('hi');

  const submitBtn = screen.getByRole('button', { name: /submit entry/i });

  userEvent.type(userName, name);
  userEvent.type(userEntry, entry);
  userEvent.click(submitBtn);

  expect(screen.getByRole('heading', { name: /name: phoenix/i })).toBeInTheDocument();
});

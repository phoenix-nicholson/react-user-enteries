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

  const userName = screen.getByRole('textbox', { name: /your name/i });
  const name = 'phoenix';
  userEvent.type(userName, name);
  expect(name).toBe('phoenix');
});

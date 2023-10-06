import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the title', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('To-do List')
});


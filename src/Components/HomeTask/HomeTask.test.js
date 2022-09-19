import { render, screen } from '@testing-library/react';
import HomeTask from './HomeTask';

test('renders header', () => {
  render(<HomeTask />);
  const linkElement = screen.getByText(/HomeTask: Accidents Explorer/i);
  expect(linkElement).toBeInTheDocument();
});

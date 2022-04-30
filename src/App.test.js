import { render, screen } from '@testing-library/react';
import MucukApp from './App';

test('renders learn react link', () => {
  render(<MucukApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


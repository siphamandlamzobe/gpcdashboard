import { render, screen } from '@testing-library/react';
import App from './App';

test('renders gpc logo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/gpc/i);
  expect(linkElement).toBeInTheDocument();
});

test('render the service report sidebar link', () =>{
  render(<App />);
  const linkElement = screen.getByText(/service report/i);
  expect(linkElement).toBeInTheDocument();
})
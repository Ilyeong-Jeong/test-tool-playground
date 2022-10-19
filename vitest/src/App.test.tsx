import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Sample App vitest', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it('should increment the count when icon (+) clicked', async() => {
    render(<App />);
    userEvent.click(screen.getByText('+'));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  });

  it('should decrement the count when icon (-) clicked', async() => {
    render(<App />);
    userEvent.click(screen.getByText('-'));
    expect(await screen.findByText(/count is: -1/i)).toBeInTheDocument();
  });
});
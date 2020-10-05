import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('expects my name is theoderic to be there', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/my name is theoderic/i);
  expect(linkElement).toBeInTheDocument();
});

test('expects to see the welcome text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to Theoderic apps/i);
  expect(linkElement).toBeInTheDocument();
});


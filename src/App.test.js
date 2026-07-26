// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoNet title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoNet/i);
    expect(titleElement).toBeInTheDocument();
});

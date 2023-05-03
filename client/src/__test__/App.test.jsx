import {render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App tests', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText('Tutor Me Up Website')).toBeInTheDocument();
  });
});


// React is required when using JSX inside test files
import React from 'react';

// render — mounts a component into a virtual DOM for testing
import { render } from '@testing-library/react';

// Provider wraps components that need access to the Redux store during tests
import { Provider } from 'react-redux';

// The real Redux store — used here so the test reflects actual app state
import { store } from './store';

// The component being tested
import App from './App';

// Test: verifies that the App renders text containing "learn"
test('renders learn react link', () => {
  // Render App inside Provider so Redux-connected children don't throw
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Assert that an element with text matching /learn/ (case-insensitive) is in the DOM
  expect(getByText(/learn/i)).toBeInTheDocument();
});

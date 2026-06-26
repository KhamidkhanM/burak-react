// React core library — needed to write JSX and use React features
import React from "react";

// ReactDOM renders the React component tree into the real browser DOM
import ReactDOM from "react-dom";

// Provider makes the Redux store available to every component in the tree
import { Provider } from "react-redux";

// The configured Redux store that holds the entire application state
import { store } from "./app/store";

// Root application component — top-level UI entry point
import App from "./app/App";

// Utility to measure and report core web vitals (load, interaction, layout shift)
import reportWebVitals from "./reportWebVitals";

// MUI component that injects a CSS baseline/reset so styles are consistent across browsers
import CssBaseline from '@mui/material/CssBaseline';

// ThemeProvider passes the custom MUI theme down to all child components via React context
import { ThemeProvider } from '@mui/material/styles';

// Custom MUI theme object (colors, typography, spacing, etc.) defined for this app
import theme from "./app/MaterialTheme";

// Global CSS styles applied to the entire app
import "./css/index.css";
import {BrowserRouter as Router} from "react-router-dom"; //importing react-router-dom

// Mounts the React app into the <div id="root"> element in public/index.html
ReactDOM.render(
  // StrictMode activates extra runtime warnings for deprecated APIs and side-effect issues
  <React.StrictMode>
    {/* Provider wraps the whole app so any component can access the Redux store */}
    <Provider store={store}>
      {/* ThemeProvider supplies the custom MUI theme to all MUI components below */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline normalises default browser styles (margin, box-sizing, fonts, etc.) */}
        <CssBaseline/>
        {/* App is the root component that renders all pages and routing */}
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  // Targets the single <div id="root"> in index.html as the mount point
  document.getElementById("root")
);

// Starts collecting performance metrics; pass console.log to print them, or a URL to send them
reportWebVitals();

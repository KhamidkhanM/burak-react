// createTheme builds a full MUI theme object from a partial config
import { createTheme } from '@mui/material/styles';

// common provides base color constants like common.white and common.black
import { common } from '@mui/material/colors';

// Custom shadow scale — array of CSS box-shadow strings (one per MUI elevation level)
import shadow from './shadow';

// Custom typography config — font sizes and weights for h1–h6 and other variants
import typography from './typography';

/**
 * LIGHT THEME (DEFAULT)
 */
// Base theme config object — defines palette, component overrides, shadows, and typography
const light = {
	// Palette controls all colors used by MUI components throughout the app
	palette: {
		type: 'light', // tells MUI this is a light-mode palette
		background: {
			default: '#f8f8ff', // page background color
			paper: common.white, // background for cards, modals, dialogs
		},
		primary: {
			contrastText: '#d7b586', // text color drawn on top of primary backgrounds
			main: '#343434',         // primary brand color (dark charcoal)
		},
		secondary: {
			contrastText: '#343434', // text color drawn on top of secondary backgrounds
			main: '#d7b586',         // secondary brand color (light gold/tan)
		},
		text: {
			primary: '#343434',      // default body text color
			secondary: '#d7b586',    // muted/secondary text color
			dark: common.black,      // explicit black for high-contrast text
		},
	},
	// components lets us override default MUI component styles globally
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					height: '100%', // make all Containers fill their parent height
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				html: { height: '100%' },                                              // stretch html element to full viewport
				body: { background: '#f4f6f8', height: '100%', minHeight: '100%' },   // grey page background, full height
			},
		},
	},
	shadow,     // injects the custom shadow array as the theme's shadows scale
	typography, // injects the custom typography config into the theme
};

// Build the initial theme from the light config object
let theme = createTheme(light);

// Second createTheme call extends the first theme so breakpoints are available
// (theme.breakpoints.up requires an already-built theme, not just a config object)
theme = createTheme(theme, {
	components: {
		MuiContainer: {
			styleOverrides: {
				// Override the max-width of large containers using the theme's lg breakpoint
				maxWidthLg: {
					[theme.breakpoints.up('lg')]: {
						maxWidth: '1300px', // wider than MUI's default lg max-width
					},
				},
			},
		},
	},
});

// Export the fully built theme so ThemeProvider in index.tsx can consume it
export default theme;

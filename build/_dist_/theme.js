import { createMuiTheme } from "/web_modules/@material-ui/core/styles.js";
import createPalette from "/web_modules/@material-ui/core/styles/createPalette.js";
import createTypography from "/web_modules/@material-ui/core/styles/createTypography.js";
import "./index.css.proxy.js";

const theme = (() => {
  const palette = createPalette({
    type: "dark"
  });
  const typography = createTypography(palette, {
    fontFamily: "'Anton', sans-serif",
    fontFamily: "'Dancing Script', cursive",
    fontFamily: "'Montserrat', sans-serif"
  });
  return createMuiTheme({
    palette: palette,
    typography: typography
  });
})();

export default theme; // primary: {
// 	light: "#9692c7",
// 	main: "#7c77b9",
// 	dark: "#565381",
// 	contrastText: "#fff",
// },
// secondary: {
// 	light: "#a5cbe6",
// 	main: "#8fbfe0",
// 	dark: "#64859c",
// 	contrastText: "#000",
// },
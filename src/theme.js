import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import createTypography from "@material-ui/core/styles/createTypography";
import "./index.css";

const theme = (() => {
	const palette = createPalette({
		type: "dark",
	});
	const typography = createTypography(palette, {
		fontFamily: "'Anton', sans-serif",
		fontFamily: "'Dancing Script', cursive",
		fontFamily: "'Montserrat', sans-serif",
	});

	return createMuiTheme({
		palette: palette,
		typography: typography,
	});
})();

export default theme;

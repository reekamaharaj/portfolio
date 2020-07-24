import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import createTypography from "@material-ui/core/styles/createTypography";
import "./index.css";

const theme = (() => {
	const palette = createPalette({
		primary: {
			light: "#9692c7",
			main: "#7c77b9",
			dark: "#565381",
			contrastText: "#fff",
		},
		secondary: {
			light: "#a5cbe6",
			main: "#8fbfe0",
			dark: "#64859c",
			contrastText: "#000",
		},
	});
	const typography = createTypography(palette, {
		fontFamily: "Montserrat",
	});

	return createMuiTheme({
		palette: palette,
		typography: typography,
	});
})();

export default theme;

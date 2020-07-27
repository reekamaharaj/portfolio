import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import "./index.css";

const theme = (() => {
	const palette = createPalette({
		type: "light",
	});

	return createMuiTheme({
		palette: palette,
	});
})();

export default theme;

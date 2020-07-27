import { createMuiTheme } from "/web_modules/@material-ui/core/styles.js";
import createPalette from "/web_modules/@material-ui/core/styles/createPalette.js";
import "./index.css.proxy.js";

const theme = (() => {
  const palette = createPalette({
    type: "light"
  });
  return createMuiTheme({
    palette: palette
  });
})();

export default theme;
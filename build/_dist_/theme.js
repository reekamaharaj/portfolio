import { createMuiTheme } from "/web_modules/@material-ui/core/styles.js";
import createPalette from "/web_modules/@material-ui/core/styles/createPalette.js";
import "./index.css.proxy.js";

const theme = (() => {
  const palette = createPalette({
    type: "dark"
  });
  return createMuiTheme({
    palette: palette
  });
})();

export default theme;
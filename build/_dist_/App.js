import React from "/web_modules/react.js";
import Tab from "./components/Tab.js";
import Container from "/web_modules/@material-ui/core/Container.js";
import theme from "./theme.js";
import { ThemeProvider } from '/web_modules/@material-ui/core/styles.js';
import CssBaseline from '/web_modules/@material-ui/core/CssBaseline.js';

const App = () => /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Tab, {
  height: 100,
  width: 100
})));

export default App;
import React from "/web_modules/react.js";
import Content from "./components/Content/Content.js";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider.js";
import theme from "./theme.js";
import { ThemeProvider } from '/web_modules/@material-ui/core/styles.js';
import CssBaseline from '/web_modules/@material-ui/core/CssBaseline.js';

const App = () => /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(WindowDimensionsProvider, null, /*#__PURE__*/React.createElement(Content, {
  height: 100,
  width: 100
})));

export default App;
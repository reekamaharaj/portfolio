import React from "/web_modules/react.js";
import Content from "./components/Content/Content.js";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider.js";

const App = () => /*#__PURE__*/React.createElement(WindowDimensionsProvider, null, /*#__PURE__*/React.createElement(Content, {
  height: 100,
  width: 100
}));

export default App;
import React from "/web_modules/react.js";
import ResponsiveLayout from "../ResponsiveLayout.js";
import MobileView from "../MobileView.js";
import DesktopView from "../DesktopView.js";

const Content = () => {
  return /*#__PURE__*/React.createElement(ResponsiveLayout, {
    breakPoint: 767,
    renderDesktop: () => /*#__PURE__*/React.createElement(DesktopView, null),
    renderMobile: () => /*#__PURE__*/React.createElement(MobileView, null)
  });
};

export default Content;
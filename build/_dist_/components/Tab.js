import React from "web_modules/react.js";
import { makeStyles } from "web_modules/@material-ui/core/styles.js";
import List from "web_modules/@material-ui/core/List.js";
import Divider from "web_modules/@material-ui/core/Divider.js";
import Collapse from "web_modules/@material-ui/core/Collapse.js";
import ToggleButtonGroup from "web_modules/@material-ui/lab/ToggleButtonGroup.js";
import ToggleButton from "web_modules/@material-ui/lab/ToggleButton.js";
import Home from "./Home.js";
import Portfolio from "./Portfolio.js";
import About from "./About.js";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4),
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0
  }
}));
export default function Tab(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openIndex, setOpenIndex] = React.useState(0);

  const handleTab = (event, index) => {
    setSelectedIndex(index);
    setOpenIndex(index);
  };

  return /*#__PURE__*/React.createElement(List, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(ToggleButtonGroup, {
    value: selectedIndex,
    exculsive: "true",
    className: classes.nested
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "home",
    selected: selectedIndex === 0,
    onClick: event => handleTab(event, 0)
  }, "Home", /*#__PURE__*/React.createElement(Collapse, {
    in: openIndex === 0,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(Home, null))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "portfolio",
    selected: selectedIndex === 1,
    onClick: event => handleTab(event, 1)
  }, "Portfolio", /*#__PURE__*/React.createElement(Collapse, {
    in: openIndex === 1,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(Portfolio, null))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "about",
    selected: selectedIndex === 2,
    onClick: event => handleTab(event, 2)
  }, "About", /*#__PURE__*/React.createElement(Collapse, {
    in: openIndex === 2,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(About, null))), /*#__PURE__*/React.createElement(Divider, null)));
}
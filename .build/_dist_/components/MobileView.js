function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "/web_modules/react.js";
import PropTypes from "/web_modules/prop-types.js";
import { makeStyles } from "/web_modules/@material-ui/core/styles.js";
import AppBar from "/web_modules/@material-ui/core/AppBar.js";
import Tabs from "/web_modules/@material-ui/core/Tabs.js";
import Tab from "/web_modules/@material-ui/core/Tab.js";
import Typography from "/web_modules/@material-ui/core/Typography.js";
import Box from "/web_modules/@material-ui/core/Box.js";
import Home from "./Content/Home.js";
import ProjectCard from "./Content/ProjectCard.js";
import About from "./Content/About.js";
import Projects from "./Content/projects.json";

function TabPanel(props) {
  const {
    children,
    selectedIndex,
    index,
    ...other
  } = props;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    hidden: selectedIndex !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other), selectedIndex === index && /*#__PURE__*/React.createElement(Box, {
    p: 3
  }, /*#__PURE__*/React.createElement(Typography, null, children)));
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  selectedIndex: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: "transparent"
  }
});
export default function SimpleTabs() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setSelectedIndex(index);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(AppBar, {
    position: "static"
  }, /*#__PURE__*/React.createElement(Tabs, {
    selectedIndex: selectedIndex,
    onChange: handleChange,
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "simple tabs example"
  }, /*#__PURE__*/React.createElement(Tab, _extends({
    label: "Home"
  }, a11yProps(0))), /*#__PURE__*/React.createElement(Tab, _extends({
    label: "About"
  }, a11yProps(1))), Projects.map(project => [/*#__PURE__*/React.createElement(Tab, _extends({
    key: project.name,
    label: project.name
  }, a11yProps(project.id)))]))), /*#__PURE__*/React.createElement(TabPanel, {
    selectedIndex: selectedIndex,
    index: 0
  }, /*#__PURE__*/React.createElement(Home, null)), /*#__PURE__*/React.createElement(TabPanel, {
    selectedIndex: selectedIndex,
    index: 1
  }, /*#__PURE__*/React.createElement(About, null)), Projects.map(project => [/*#__PURE__*/React.createElement(TabPanel, {
    key: project.name,
    selectedIndex: selectedIndex,
    index: project.id
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    name: project.name,
    repoLink: project.repoLink,
    deployedLink: project.deployedLink,
    description: project.description,
    img: project.img,
    techUsed: project.techUsed,
    role: project.role
  }))]));
}
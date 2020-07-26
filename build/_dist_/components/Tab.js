import React from "/web_modules/react.js";
import { makeStyles } from "/web_modules/@material-ui/core/styles.js";
import List from "/web_modules/@material-ui/core/List.js";
import Divider from "/web_modules/@material-ui/core/Divider.js";
import Collapse from "/web_modules/@material-ui/core/Collapse.js";
import ToggleButtonGroup from "/web_modules/@material-ui/lab/ToggleButtonGroup.js";
import ToggleButton from "/web_modules/@material-ui/lab/ToggleButton.js";
import Home from "./Home.js";
import ProjectCard from "./ProjectCard.js";
import About from "./About.js";
import Projects from "./projects.json.proxy.js";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  nested: {
    paddingLeft: theme.spacing(4),
    height: "100%"
  },
  tabButtonClosed: {
    width: 90,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5
  }
}));

const styleFactory = (selectedIndex, index) => ({
  transform: selectedIndex === index ? "" : "rotate(90deg)",
  display: selectedIndex === index ? "none" : ""
});

const timings = {
  enter: 600
};
export default function Tab() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleTab = (event, index) => {
    setSelectedIndex(index);
  };

  return /*#__PURE__*/React.createElement(List, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(ToggleButtonGroup, {
    value: selectedIndex,
    exculsive: "true",
    className: classes.nested
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    className: selectedIndex === 0 ? "" : classes.tabButtonClosed,
    disableRipple: true,
    value: "home",
    selected: selectedIndex === 0,
    onClick: event => handleTab(event, 0)
  }, /*#__PURE__*/React.createElement("p", {
    style: styleFactory(selectedIndex, 0)
  }, "Home"), /*#__PURE__*/React.createElement(Collapse, {
    in: selectedIndex === 0,
    timeout: timings,
    mountOnEnter: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: selectedIndex === 0 ? 600 : 0,
      overflowX: "hidden",
      transition: "ease-in-out"
    }
  }, /*#__PURE__*/React.createElement(Home, null)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ToggleButton, {
    className: selectedIndex === 1 ? "" : classes.tabButtonClosed,
    disableRipple: true,
    value: "about",
    selected: selectedIndex === 1,
    onClick: event => handleTab(event, 1)
  }, /*#__PURE__*/React.createElement("p", {
    style: styleFactory(selectedIndex, 1)
  }, "About"), /*#__PURE__*/React.createElement(Collapse, {
    in: selectedIndex === 1,
    timeout: timings,
    mountOnEnter: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: selectedIndex === 1 ? 600 : 0,
      overflowX: "hidden",
      transition: "ease-in-out",
      height: 600
    }
  }, /*#__PURE__*/React.createElement(About, null)))), /*#__PURE__*/React.createElement(Divider, null), Projects.map(project => [/*#__PURE__*/React.createElement(ToggleButton, {
    className: selectedIndex === project.id ? "" : classes.tabButtonClosed,
    disableRipple: true,
    value: project.id,
    key: project.name,
    selected: selectedIndex === project.id,
    onClick: event => handleTab(event, project.id)
  }, /*#__PURE__*/React.createElement("p", {
    style: styleFactory(selectedIndex, project.id)
  }, project.name), /*#__PURE__*/React.createElement(Collapse, {
    in: selectedIndex === project.id,
    timeout: timings,
    mountOnEnter: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: selectedIndex === project.id ? 600 : 0,
      overflowX: "hidden",
      transition: "ease-in-out"
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    name: project.name,
    repoLink: project.repoLink,
    deployedLink: project.deployedLink,
    description: project.description,
    img: project.img,
    techUsed: project.techUsed,
    role: project.role
  })))), /*#__PURE__*/React.createElement(Divider, {
    key: project.id
  })])));
}
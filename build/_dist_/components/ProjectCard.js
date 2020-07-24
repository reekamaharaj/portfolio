import React from "/web_modules/react.js";
import { makeStyles } from "/web_modules/@material-ui/core/styles.js";
import Paper from "/web_modules/@material-ui/core/Paper.js";
import { Typography, IconButton } from "/web_modules/@material-ui/core.js";
import GitHubIcon from "/web_modules/@material-ui/icons/GitHub.js";
import Link from "/web_modules/@material-ui/core/Link.js";
import Card from "/web_modules/@material-ui/core/Card.js";
import Chip from "/web_modules/@material-ui/core/Chip.js";
const useStyles = makeStyles(theme => ({
  root: {
    margin: 10
  },
  header: {
    color: "blue"
  },
  aboutCard: {
    backgroundColor: "blue"
  },
  about: {
    padding: 25,
    color: "white",
    textTransform: "capitalize",
    textDecoration: "none",
    fontSize: 16,
    textAlign: "auto"
  },
  icons: {
    fontSize: 40
  },
  img: {
    maxHeight: 300
  },
  chip: {
    margin: 4
  }
}));
export default function ProjectCard(props) {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    className: classes.root
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("a", {
    href: props.repoLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    className: classes.img,
    src: props.img,
    alt: "Projectimg"
  })), /*#__PURE__*/React.createElement(Typography, {
    className: classes.header
  }, /*#__PURE__*/React.createElement("h1", null, " ", props.name, " ")), /*#__PURE__*/React.createElement(Card, {
    className: classes.aboutCard
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.about,
    variant: "body2",
    color: "primary",
    component: "p"
  }, props.description)), /*#__PURE__*/React.createElement(Card, {
    className: classes.header
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: props.deployedLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "github"
  }, /*#__PURE__*/React.createElement(GitHubIcon, {
    className: classes.icons
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Typography, {
    className: classes.header,
    variant: "body2",
    color: "primary",
    component: "p"
  }, "SKILLS:", " ", props.techUsed.map(tech => /*#__PURE__*/React.createElement(Chip, {
    className: classes.chip,
    size: "small",
    label: tech,
    key: tech
  }))))));
}
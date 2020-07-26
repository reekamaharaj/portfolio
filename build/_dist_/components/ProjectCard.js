import React from "/web_modules/react.js";
import { withStyles, makeStyles } from "/web_modules/@material-ui/core/styles.js";
import Paper from "/web_modules/@material-ui/core/Paper.js";
import { Typography, IconButton } from "/web_modules/@material-ui/core.js";
import GitHubIcon from "/web_modules/@material-ui/icons/GitHub.js";
import Link from "/web_modules/@material-ui/core/Link.js";
import Card from "/web_modules/@material-ui/core/Card.js";
import Chip from "/web_modules/@material-ui/core/Chip.js";
import Tooltip from "/web_modules/@material-ui/core/Tooltip.js";
const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip);
const useStyles = makeStyles(theme => ({
  root: {
    margin: 10
  },
  card: {
    paddingLeft: 20,
    paddingRight: 20
  },
  des: {
    textTransform: "capitalize",
    textDecoration: "none",
    fontSize: 16,
    textAlign: "auto",
    fontFamily: "Montserrat"
  },
  icons: {
    fontSize: 40
  },
  img: {
    maxHeight: 300
  },
  chip: {
    margin: 4,
    textTransform: "capitalize"
  },
  projectCard: {
    paddingBottom: 15
  }
}));
export default function ProjectCard(props) {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    className: classes.root
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(LightTooltip, {
    title: "Deployed App"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.repoLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    className: classes.img,
    src: props.img,
    alt: "Projectimg"
  }))), /*#__PURE__*/React.createElement(Typography, {
    className: classes.header
  }, /*#__PURE__*/React.createElement("h1", null, " ", props.name, " ", /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: props.deployedLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(LightTooltip, {
    title: "GitHub Repo"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "github"
  }, /*#__PURE__*/React.createElement(GitHubIcon, {
    className: classes.icons
  })))))), /*#__PURE__*/React.createElement(Card, {
    className: classes.card
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.des,
    variant: "body2",
    component: "p"
  }, props.description)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Typography, {
    className: classes.projectCard,
    variant: "body2",
    component: "p"
  }, /*#__PURE__*/React.createElement("h3", {
    className: classes.header
  }, "SKILLS:"), " ", props.techUsed.map(tech => /*#__PURE__*/React.createElement(Chip, {
    variant: "outlined",
    className: classes.chip,
    size: "small",
    label: tech,
    key: tech
  }))))));
}
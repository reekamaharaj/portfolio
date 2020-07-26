import React from "/web_modules/react.js";
import { withStyles, makeStyles } from "/web_modules/@material-ui/core/styles.js";
import Paper from "/web_modules/@material-ui/core/Paper.js";
import { Typography } from "/web_modules/@material-ui/core.js";
import Link from "/web_modules/@material-ui/core/Link.js";
import Card from "/web_modules/@material-ui/core/Card.js";
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
    height: "100%"
  },
  about: {
    paddingLeft: 25,
    paddingRight: 25,
    textTransform: "none",
    textDecoration: "none",
    fontSize: 16,
    textAlign: "auto",
    fontFamily: "Montserrat"
  },
  icons: {
    fontSize: 40
  }
}));
export default function About() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    className: classes.root
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Typography, {
    className: classes.header
  }, /*#__PURE__*/React.createElement("h1", null, "About Me")), /*#__PURE__*/React.createElement(Card, {
    className: classes.aboutCard
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.about,
    variant: "body2",
    component: "p"
  }, "I had a short career in Civil Engineering before I decided to take a step back to reevaluate my life goals. I took some time to volunteer with nonprofits, substitute for my public school district, become a support group leader and start a small art business.", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null), "Through each option, there was a connecting factor. The importance of software development. I saw gaps that could be filled with the right software application. I got tired of saying, \"if only someone would build...\" Why wait for someone else to build it? I could do that, I just needed to learn how. So I started learning on my own but soon realized that I needed some guidance. With so much out there, I didn't know what I should concentrate on. I enrolled and completed the UT Austin Full Stack Web Development program and am ready to start my journey as a junior web developer.", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null), " Other things about me. I enjoy to draw and have a small art business", " ", /*#__PURE__*/React.createElement(LightTooltip, {
    title: "Art Portfolio"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "http://www.doodlejutsu.com",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: "underline white",
      color: "white",
      fontWeight: "bold"
    }
  }, "Doodlejutsu")), ". Along with my mental health advocacy I run a blog called", " ", /*#__PURE__*/React.createElement(LightTooltip, {
    title: "Blog"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "http://www.illgetthere.com",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: "underline white",
      color: "white",
      fontWeight: "bold"
    }
  }, "I'll Get There")), " ", "where I write honestly about living with mental illness."))));
}
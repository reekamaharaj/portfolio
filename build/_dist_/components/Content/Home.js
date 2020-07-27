import React from "/web_modules/react.js";
import { withStyles, makeStyles } from "/web_modules/@material-ui/core/styles.js";
import Paper from "/web_modules/@material-ui/core/Paper.js";
import { Typography, IconButton } from "/web_modules/@material-ui/core.js";
import GitHubIcon from "/web_modules/@material-ui/icons/GitHub.js";
import LinkedInIcon from "/web_modules/@material-ui/icons/LinkedIn.js";
import AlternateEmailIcon from "/web_modules/@material-ui/icons/AlternateEmail.js";
import PictureAsPdfIcon from "/web_modules/@material-ui/icons/PictureAsPdf.js";
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
    margin: 10
  },
  about: {
    padding: 25,
    textDecoration: "none",
    textAlign: "auto",
    fontFamily: "Montserrat"
  },
  icons: {
    fontSize: 50,
    "&": {
      lineHeight: "60px",
      color: "gray",
      transition: ".5s"
    },
    "&:before": {
      content: "",
      width: "100%",
      height: "100%",
      backgroundColor: "blue",
      transition: ".5s",
      transform: "scale(.9)",
      zIndex: "-1"
    },
    "&:hover:before": {
      transform: "scale(1.2)",
      boxShadow: "0 0 15px blue",
      filter: "blur(3px)"
    },
    "&:hover": {
      color: "blue",
      textShadow: "0 0 15px blue"
    }
  }
}));
export default function Home() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    className: classes.root
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Typography, {
    className: classes.header
  }, /*#__PURE__*/React.createElement("h1", null, "Hi. I'm Reeka. "), /*#__PURE__*/React.createElement("img", {
    style: {
      maxWidth: 400
    },
    src: "./images/avatar.jpg",
    alt: "personalAvatar"
  })), /*#__PURE__*/React.createElement(Card, {
    className: classes.aboutCard
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(LightTooltip, {
    title: "Resume PDF"
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "assets/other/ReekaMaharajResume.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "link to resume"
  }, /*#__PURE__*/React.createElement(PictureAsPdfIcon, {
    className: classes.icons
  })))), /*#__PURE__*/React.createElement(LightTooltip, {
    title: "GitHub Repo"
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "https://github.com/reekamaharaj",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "github"
  }, /*#__PURE__*/React.createElement(GitHubIcon, {
    className: classes.icons
  })))), /*#__PURE__*/React.createElement(LightTooltip, {
    title: "LinkedIn"
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "https://www.linkedin.com/in/reekamaharaj/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "linkedin"
  }, /*#__PURE__*/React.createElement(LinkedInIcon, {
    className: classes.icons
  })))), /*#__PURE__*/React.createElement(LightTooltip, {
    title: "Email"
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "mailto: reekamaharaj@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "email"
  }, /*#__PURE__*/React.createElement(AlternateEmailIcon, {
    className: classes.icons
  })))))));
}
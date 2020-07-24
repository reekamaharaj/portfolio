import React from "/web_modules/react.js";
import { makeStyles } from "/web_modules/@material-ui/core/styles.js";
import Paper from "/web_modules/@material-ui/core/Paper.js";
import { Typography, IconButton } from "/web_modules/@material-ui/core.js";
import GitHubIcon from "/web_modules/@material-ui/icons/GitHub.js";
import LinkedInIcon from "/web_modules/@material-ui/icons/LinkedIn.js";
import AlternateEmailIcon from "/web_modules/@material-ui/icons/AlternateEmail.js";
import PictureAsPdfIcon from "/web_modules/@material-ui/icons/PictureAsPdf.js";
import Link from "/web_modules/@material-ui/core/Link.js";
import Card from "/web_modules/@material-ui/core/Card.js";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
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
    src: "https://avatars3.githubusercontent.com/u/26286639?s=400&u=c295b5a161dd978f519d7c91bdf55c0538eae474&v=4",
    alt: "personalAvatar"
  })), /*#__PURE__*/React.createElement(Card, {
    className: classes.aboutCard
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "assets/other/ReekaMaharajResume.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "link to resume"
  }, /*#__PURE__*/React.createElement(PictureAsPdfIcon, {
    className: classes.icons
  }))), /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "https://github.com/reekamaharaj",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "github"
  }, /*#__PURE__*/React.createElement(GitHubIcon, {
    className: classes.icons
  }))), /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "https://www.linkedin.com/in/reekamaharaj/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "linkedin"
  }, /*#__PURE__*/React.createElement(LinkedInIcon, {
    className: classes.icons
  }))), /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "mailto: reekamaharaj@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "email"
  }, /*#__PURE__*/React.createElement(AlternateEmailIcon, {
    className: classes.icons
  }))))));
}
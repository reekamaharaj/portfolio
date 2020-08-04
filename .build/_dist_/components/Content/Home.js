import React from "/web_modules/react.js";
import { withStyles, makeStyles } from "/web_modules/@material-ui/core/styles.js";
import Card from "/web_modules/@material-ui/core/Card.js";
import CardActionArea from "/web_modules/@material-ui/core/CardActionArea.js";
import CardActions from "/web_modules/@material-ui/core/CardActions.js";
import CardContent from "/web_modules/@material-ui/core/CardContent.js";
import CardMedia from "/web_modules/@material-ui/core/CardMedia.js";
import { Typography, IconButton } from "/web_modules/@material-ui/core.js";
import GitHubIcon from "/web_modules/@material-ui/icons/GitHub.js";
import LinkedInIcon from "/web_modules/@material-ui/icons/LinkedIn.js";
import AlternateEmailIcon from "/web_modules/@material-ui/icons/AlternateEmail.js";
import PictureAsPdfIcon from "/web_modules/@material-ui/icons/PictureAsPdf.js";
import Link from "/web_modules/@material-ui/core/Link.js";
import Tooltip from "/web_modules/@material-ui/core/Tooltip.js";
const LightTooltip = withStyles({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11
  }
})(Tooltip);
const useStyles = makeStyles({
  root: {
    maxWidth: 400
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
});
export default function Home() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Card, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Typography, {
    style: {
      fontFamily: "Nothing You Could Do",
      fontWeight: "bold",
      textAlign: "center"
    },
    variant: "h3",
    component: "h2"
  }, "Hi. I'm Reeka")), /*#__PURE__*/React.createElement(CardMedia, {
    component: "img",
    alt: "personalAvatar",
    image: "./images/avatar.jpg"
  })), /*#__PURE__*/React.createElement(CardActions, {
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(LightTooltip, {
    title: "Resume PDF"
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: "./images/Reeka's Resume.pdf",
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
  }))))));
}
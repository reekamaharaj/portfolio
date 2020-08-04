import React from "/web_modules/react.js";
import { withStyles, makeStyles } from "/web_modules/@material-ui/core/styles.js";
import Card from "/web_modules/@material-ui/core/Card.js";
import CardActionArea from "/web_modules/@material-ui/core/CardActionArea.js";
import CardActions from "/web_modules/@material-ui/core/CardActions.js";
import CardContent from "/web_modules/@material-ui/core/CardContent.js";
import CardMedia from "/web_modules/@material-ui/core/CardMedia.js";
import { Typography, IconButton } from "/web_modules/@material-ui/core.js";
import GitHubIcon from "/web_modules/@material-ui/icons/GitHub.js";
import Link from "/web_modules/@material-ui/core/Link.js";
import Chip from "/web_modules/@material-ui/core/Chip.js";
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
    fontSize: 30,
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
  },
  chip: {
    margin: 4,
    textTransform: "none",
    backgroundColor: "blue",
    color: "white"
  }
});
export default function ProjectCard(props) {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Card, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(LightTooltip, {
    title: "Deployed App"
  }, /*#__PURE__*/React.createElement(Link, {
    href: props.deployedLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(CardMedia, {
    style: {
      margin: 0
    },
    component: "img",
    alt: "projectImg",
    image: props.img
  }))), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Typography, {
    style: {
      fontFamily: "Nothing You Could Do",
      fontWeight: "bold",
      textAlign: "center"
    },
    variant: "h4",
    component: "h2"
  }, props.name, /*#__PURE__*/React.createElement(Link, {
    color: "primary",
    href: props.repoLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(LightTooltip, {
    title: "GitHub Repo"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "github"
  }, /*#__PURE__*/React.createElement(GitHubIcon, {
    className: classes.icons
  }))))), /*#__PURE__*/React.createElement(Typography, {
    style: {
      fontFamily: "Montserrat"
    },
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, props.description))), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Typography, {
    style: {
      fontFamily: "Nothing You Could Do",
      fontWight: "bold",
      textAlign: "center"
    },
    variant: "h5",
    component: "h2"
  }, " ", "SKILLS:", " "), props.techUsed.map(tech => /*#__PURE__*/React.createElement(Chip, {
    variant: "outlined",
    className: classes.chip,
    size: "small",
    label: tech,
    key: tech
  }))));
}
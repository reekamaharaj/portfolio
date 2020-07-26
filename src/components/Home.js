import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles(theme => ({
	tooltip: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: theme.shadows[1],
		fontSize: 11,
	},
}))(Tooltip);

const useStyles = makeStyles(theme => ({
	root: {
		margin: 10,
	},
	about: {
		padding: 25,
		textDecoration: "none",
		textAlign: "auto",
		fontFamily: "Montserrat",
	},
	icons: {
		fontSize: 50,
		"&": {
			lineHeight: "60px",
			color: "gray",
			transition: ".5s",
		},
		"&:before": {
			content: "",
			width: "100%",
			height: "100%",

			backgroundColor: "blue",
			transition: ".5s",
			transform: "scale(.9)",
			zIndex: "-1",
		},
		"&:hover:before": {
			transform: "scale(1.2)",
			boxShadow: "0 0 15px blue",
			filter: "blur(3px)",
		},
		"&:hover": {
			color: "blue",
			textShadow: "0 0 15px blue",
		},
	},
}));

export default function Home() {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<Card>
				<Typography className={classes.header}>
					<h1>Hi. I'm Reeka. </h1>
					<img
						style={{
							maxWidth: 400,
						}}
						src="./images/avatar.jpg"
						alt="personalAvatar"
					/>
				</Typography>
				<Card className={classes.aboutCard}></Card>
				<Card>
					<LightTooltip title="Resume PDF">
						<Link
							color="primary"
							href="assets/other/ReekaMaharajResume.pdf"
							target="_blank"
							rel="noopener noreferrer">
							<IconButton aria-label="link to resume">
								<PictureAsPdfIcon className={classes.icons} />
							</IconButton>
						</Link>
					</LightTooltip>
					<LightTooltip title="GitHub Repo">
						<Link
							color="primary"
							href="https://github.com/reekamaharaj"
							target="_blank"
							rel="noopener noreferrer">
							<IconButton aria-label="github">
								<GitHubIcon className={classes.icons} />
							</IconButton>
						</Link>
					</LightTooltip>
					<LightTooltip title="LinkedIn">
						<Link
							color="primary"
							href="https://www.linkedin.com/in/reekamaharaj/"
							target="_blank"
							rel="noopener noreferrer">
							<IconButton aria-label="linkedin">
								<LinkedInIcon className={classes.icons} />
							</IconButton>
						</Link>
					</LightTooltip>
					<LightTooltip title="Email">
						<Link
							color="primary"
							href="mailto: reekamaharaj@gmail.com"
							target="_blank"
							rel="noopener noreferrer">
							<IconButton aria-label="email">
								<AlternateEmailIcon className={classes.icons} />
							</IconButton>
						</Link>
					</LightTooltip>
				</Card>
			</Card>
		</Paper>
	);
}

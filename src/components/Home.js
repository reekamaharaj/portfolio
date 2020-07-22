import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
	},
	header: {
		color: "blue",
	},
	aboutCard: {
		backgroundColor: "blue",
	},
	about: {
		padding: 25,
		color: "white",
		textTransform: "capitalize",
		textDecoration: "none",
		fontSize: 16,
		textAlign: "auto",
	},
	icons: {
		fontSize: 40,
	},
}));

export default function Home() {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<Card>
				<Typography className={classes.header}>
					<h1>Hi. I'm Reeka. </h1>
					<img src="https://avatars3.githubusercontent.com/u/26286639?s=400&u=c295b5a161dd978f519d7c91bdf55c0538eae474&v=4"></img>
				</Typography>
				<Card className={classes.aboutCard}></Card>
				<Card>
					<Link
						color="primary"
						href="assets/other/ReekaMaharajResume.pdf"
						target="_blank"
						rel="noreferrer">
						<IconButton aria-label="link to resume">
							<PictureAsPdfIcon className={classes.icons} />
						</IconButton>
					</Link>
					<Link
						color="primary"
						href="https://github.com/reekamaharaj"
						target="_blank"
						rel="noreferrer">
						<IconButton aria-label="github">
							<GitHubIcon className={classes.icons} />
						</IconButton>
					</Link>
					<Link
						color="primary"
						href="https://www.linkedin.com/in/reekamaharaj/"
						target="_blank"
						rel="noreferrer">
						<IconButton aria-label="linkedin">
							<LinkedInIcon className={classes.icons} />
						</IconButton>
					</Link>
					<Link
						color="primary"
						href="mailto: reekamaharaj@gmail.com"
						target="_blank"
						rel="noreferrer">
						<IconButton aria-label="email">
							<AlternateEmailIcon className={classes.icons} />
						</IconButton>
					</Link>
				</Card>
			</Card>
		</Paper>
	);
}

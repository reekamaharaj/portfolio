import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
	root: {
		margin: 10,
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

export default function Project2() {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<Card>
				<a
					href="https://secret-sea-43148.herokuapp.com/"
					target="_blank">
					bookSeach img
				</a>
				<Typography className={classes.header}>
					<h1> Book Search </h1>
				</Typography>
				<Card className={classes.aboutCard}>
					<Typography
						className={classes.about}
						variant="body2"
						color="primary"
						component="p">
						This is a Google Book search app built with React.
					</Typography>
				</Card>
				<Card className={classes.header}>
					<Link
						color="primary"
						href="https://github.com/reekamaharaj/bookSearch"
						target="_blank"
						rel="noreferrer">
						<IconButton aria-label="github">
							<GitHubIcon className={classes.icons} />
						</IconButton>
					</Link>
				</Card>
				<Card>
					<Typography
						className={classes.header}
						variant="body2"
						color="primary"
						component="p">
						SKILLS: <a> Visual Studios </a> <a> Javascript </a>
						<a> Node.js </a> <a> Express </a> <a> React </a>{" "}
						<a> Heroku </a>
						<a> MongoDB </a> <a> Mongoose </a> <a> axios </a>
						<a> Google Books API </a>
					</Typography>
				</Card>
			</Card>
		</Paper>
	);
}

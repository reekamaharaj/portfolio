import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
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

export default function About() {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<Card>
				<Typography className={classes.header}>
					<h1>Header Here </h1>
				</Typography>
				<Card className={classes.aboutCard}>
					<Typography
						className={classes.about}
						variant="body2"
						color="primary"
						component="p">
						Not sure what this tab will be for
					</Typography>
				</Card>
				<Card>
					<Link
						color="primary"
						href="https://github.com/reekamaharaj"
						target="_blank"
						rel="noreferrer">
						<IconButton aria-label="github">
							<GitHubIcon className={classes.icons} />
						</IconButton>
					</Link>
				</Card>
			</Card>
		</Paper>
	);
}

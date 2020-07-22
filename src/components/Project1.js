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

export default function Project1() {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<Card>
				<a href="https://educatable.herokuapp.com/" target="_blank">
					<img src="https://github.com/reekamaharaj/Responsive-Portfolio/blob/master/assets/images/educatable.jpg?raw=true" />
				</a>
				<Typography className={classes.header}>
					<h1> EducatAble </h1>
				</Typography>
				<Card className={classes.aboutCard}>
					<Typography
						className={classes.about}
						variant="body2"
						color="primary"
						component="p">
						EducatAble is a safe space to ask questions and learn
						information from people who live their different
						abilities everyday. Want to Demo as a user? Email:
						guest@educatable.com Password: password1!
					</Typography>
				</Card>
				<Card className={classes.header}>
					<Link
						color="primary"
						href="https://github.com/reekamaharaj/EducatAble"
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
						SKILLS: <a> Visual Studios </a> <a> Javascript </a>{" "}
						<a> TypeScript </a> <a> Node.js </a>
						<a> Express </a> <a> React </a> <a> Material UI </a>{" "}
						<a> Heroku </a> <a> MongoDB </a> <a> Mongoose </a>
						<a> axios </a> <a> bcrypt </a> <a> JSON web tokens </a>{" "}
						<a> Webpack </a>
					</Typography>
				</Card>
			</Card>
		</Paper>
	);
}

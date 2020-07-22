import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
	root: {},
}));

export default function About() {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<h2>About Me</h2>
		</Paper>
	);
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		height: "100%",
		margin: 0,
		padding: 0,
		maxWidth: 360,
	},
}));

export default function About() {
	const classes = useStyles();
	return <p className={classes.root}>This is the about page</p>;
}

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
	return (
		<>
			<h2>About Me</h2>
			<p>
				{" "}
				<i className="fas fa-briefcase"></i>Texas based web developer
			</p>
			<p>
				{" "}
				<i className="fas fa-map-marker"></i> Location - Texas
			</p>
			<p>
				I had a short career in Civil Engineering before I decided to
				take a step back to reevaluate my life goals. I took some time
				to volunteer with nonprofits, substitute for my public school
				district, become a support group leader and start a small art
				business. Through each option, there was a connecting factor.
				The importance of software development. I saw gaps that could be
				filled with the right software application. I got tired of
				saying, "if only someone would build..." Why wait for someone
				else to build it? I could do that, I just needed to learn how.
				So I started learning on my own but soon realized that I needed
				some guidance. With so much out there, I didn't know what I
				should concentrate on. I enrolled and completed the UT Austin
				Full Stack Web Development program and am ready to start my
				journey as a junior web developer. Other things about me. I
				enjoy to draw and have a small art business{" "}
				<a
					href="http://www.doodlejutsu.com"
					target="_blank"
					id="weblink">
					Doodlejutsu
				</a>
				. Along with my mental health advocacy I run a blog called{" "}
				<a
					href="http://www.illgetthere.com"
					target="_blank"
					id="weblink">
					I'll Get There
				</a>{" "}
				where I write honestly about living with mental illness.
			</p>
		</>
	);
}

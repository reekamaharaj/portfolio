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
					<h1>About Me</h1>
				</Typography>
				<Card className={classes.aboutCard}>
					<Typography
						className={classes.about}
						variant="body2"
						color="primary"
						component="p">
						I had a short career in Civil Engineering before I
						decided to take a step back to reevaluate my life goals.
						I took some time to volunteer with nonprofits,
						substitute for my public school district, become a
						support group leader and start a small art business.
						Through each option, there was a connecting factor. The
						importance of software development. I saw gaps that
						could be filled with the right software application. I
						got tired of saying, "if only someone would build..."
						Why wait for someone else to build it? I could do that,
						I just needed to learn how. So I started learning on my
						own but soon realized that I needed some guidance. With
						so much out there, I didn't know what I should
						concentrate on. I enrolled and completed the UT Austin
						Full Stack Web Development program and am ready to start
						my journey as a junior web developer. Other things about
						me. I enjoy to draw and have a small art business{" "}
						<Link
							href="http://www.doodlejutsu.com"
							target="_blank"
							rel="noreferrer"
							style={{
								textDecoration: "underline white",
								color: "white",
								fontWeight: "bold",
							}}>
							Doodlejutsu
						</Link>
						. Along with my mental health advocacy I run a blog
						called{" "}
						<Link
							href="http://www.illgetthere.com"
							target="_blank"
							rel="noreferrer"
							style={{
								textDecoration: "underline white",
								color: "white",
								fontWeight: "bold",
							}}>
							I'll Get There
						</Link>{" "}
						where I write honestly about living with mental illness.
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

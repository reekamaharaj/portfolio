import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles({
	tooltip: {
		backgroundColor: "white",
		color: "rgba(0, 0, 0, 0.87)",
		fontSize: 11,
	},
})(Tooltip);

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
	},
});

export default function About() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardContent>
					<Typography
						style={{
							fontFamily: "Nothing You Could Do",
							fontWeight: "bold",
							textAlign: "center",
						}}
						variant="h3"
						component="h2">
						About Me
					</Typography>
					<Typography
						style={{ margin: 10, fontFamily: "Montserrat" }}
						variant="body2"
						color="textSecondary"
						component="p">
						I had a short career in Civil Engineering before I
						decided to take a step back to reevaluate my life goals.
						I took some time to volunteer with nonprofits,
						substitute for my public school district, become a
						support group leader and start a small art business.
						<br /> <br />
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
						my journey as a junior web developer.
						<br /> <br /> Other things about me. I enjoy to draw and
						have a small art business{" "}
						<LightTooltip title="Art Portfolio">
							<Link
								href="http://www.doodlejutsu.com"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textDecoration: "underline",

									fontWeight: "bold",
								}}>
								Doodlejutsu
							</Link>
						</LightTooltip>
						. Along with my mental health advocacy I run a blog
						called{" "}
						<LightTooltip title="Blog">
							<Link
								href="http://www.illgetthere.com"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textDecoration: "underline",
									fontWeight: "bold",
								}}>
								I'll Get There
							</Link>
						</LightTooltip>{" "}
						where I write honestly about living with mental illness.
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

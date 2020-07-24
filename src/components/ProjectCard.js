import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";

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
	img: {
		maxHeight: 300,
	},
	chip: {
		margin: 4,
	},
}));

export default function ProjectCard(props) {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<Card>
				<a
					href={props.repoLink}
					target="_blank"
					rel="noopener noreferrer">
					<img
						className={classes.img}
						src={props.img}
						alt="Projectimg"
					/>
				</a>
				<Typography className={classes.header}>
					<h1> {props.name} </h1>
				</Typography>
				<Card className={classes.aboutCard}>
					<Typography
						className={classes.about}
						variant="body2"
						color="primary"
						component="p">
						{props.description}
					</Typography>
				</Card>
				<Card className={classes.header}>
					<Link
						color="primary"
						href={props.deployedLink}
						target="_blank"
						rel="noopener noreferrer">
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
						SKILLS:{" "}
						{props.techUsed.map(tech => (
							<Chip
								className={classes.chip}
								size="small"
								label={tech}
								key={tech}
							/>
						))}
					</Typography>
				</Card>
			</Card>
		</Paper>
	);
}

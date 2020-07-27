import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles(theme => ({
	tooltip: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: theme.shadows[1],
		fontSize: 11,
	},
}))(Tooltip);

const useStyles = makeStyles(theme => ({
	root: {
		padding: 0,
		margin: 0,
	},
	card: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	des: {
		textTransform: "none",
		textDecoration: "none",
		textAlign: "auto",
		fontFamily: "Montserrat",
	},
	icons: {
		fontSize: 40,
		"&": {
			lineHeight: "60px",
			color: "gray",
			transition: ".5s",
		},
		"&:before": {
			content: "",
			width: "100%",
			height: "100%",
			backgroundColor: "blue",
			transition: ".5s",
			transform: "scale(.9)",
			zIndex: "-1",
		},
		"&:hover:before": {
			transform: "scale(1.2)",
			boxShadow: "0 0 15px blue",
			filter: "blur(3px)",
		},
		"&:hover": {
			color: "blue",
			textShadow: "0 0 15px blue",
		},
		// hover glow style from https://codepen.io/Stockin
	},
	img: {
		maxHeight: 300,
	},
	chip: {
		margin: 4,
		textTransform: "capitalize",
	},
	projectCard: {
		paddingBottom: 15,
	},
}));

export default function ProjectCard(props) {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.root}>
			<Card>
				<LightTooltip title="Deployed App">
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
				</LightTooltip>

				<Typography>
					<h1>
						{" "}
						{props.name}
						<Link
							color="primary"
							href={props.deployedLink}
							target="_blank"
							rel="noopener noreferrer">
							<LightTooltip title="GitHub Repo">
								<IconButton aria-label="github">
									<GitHubIcon className={classes.icons} />
								</IconButton>
							</LightTooltip>
						</Link>{" "}
					</h1>
				</Typography>
				<Card className={classes.card}>
					<Typography
						className={classes.des}
						variant="body2"
						component="p">
						{props.description}
					</Typography>
				</Card>

				<Card>
					<Typography
						className={classes.projectCard}
						variant="body2"
						component="p">
						<h2 className={classes.header}>SKILLS:</h2>{" "}
						{props.techUsed.map(tech => (
							<Chip
								variant="outlined"
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

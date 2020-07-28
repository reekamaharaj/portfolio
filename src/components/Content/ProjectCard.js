import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import Chip from "@material-ui/core/Chip";
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
	icons: {
		fontSize: 30,
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
	},
	chip: {
		margin: 4,
		textTransform: "none",
		backgroundColor: "blue",
		color: "white",
	},
});

export default function ProjectCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<LightTooltip title="Deployed App">
					<a
						href={props.repoLink}
						target="_blank"
						rel="noopener noreferrer">
						<CardMedia
							style={{ margin: 0 }}
							component="img"
							alt="projectImg"
							image={props.img}
						/>
					</a>
				</LightTooltip>

				<CardContent>
					<Typography
						style={{
							fontFamily: "Nothing You Could Do",
							fontWeight: "bold",
							textAlign: "center",
						}}
						variant="h4"
						component="h2">
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
						</Link>
					</Typography>

					<Typography
						style={{ fontFamily: "Montserrat" }}
						variant="body2"
						color="textSecondary"
						component="p">
						{props.description}
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardContent>
				<Typography
					style={{
						fontFamily: "Nothing You Could Do",
						fontWight: "bold",
						textAlign: "center",
					}}
					variant="h5"
					component="h2">
					{" "}
					SKILLS:{" "}
				</Typography>
				{props.techUsed.map(tech => (
					<Chip
						variant="outlined"
						className={classes.chip}
						size="small"
						label={tech}
						key={tech}
					/>
				))}
			</CardContent>
		</Card>
	);
}

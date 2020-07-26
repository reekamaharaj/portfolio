import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Home from "./Home";
import ProjectCard from "./ProjectCard";
import About from "./About";
import Projects from "./projects.json";

const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
	},
	nested: {
		paddingLeft: theme.spacing(4),
		height: "100%",
	},
	tabButtonClosed: {
		width: 90,
		fontSize: 16,
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: "black",
	},
	tabButtonOpened: {
		width: "100%",
	},
}));

const styleFactory = (selectedIndex, index) => ({
	transform: selectedIndex === index ? "" : "rotate(90deg)",
	display: selectedIndex === index ? "none" : "",
});

const timings = {
	enter: 600,
};

export default function Tab() {
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleTab = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<List className={classes.root}>
			<ToggleButtonGroup
				value={selectedIndex}
				exculsive="true"
				className={classes.nested}>
				<ToggleButton
					className={
						selectedIndex === 0 ? "" : classes.tabButtonClosed
					}
					disableRipple={true}
					value="home"
					selected={selectedIndex === 0}
					onClick={event => handleTab(event, 0)}>
					<p style={styleFactory(selectedIndex, 0)}>Home</p>
					<Collapse
						in={selectedIndex === 0}
						timeout={timings}
						mountOnEnter>
						<div
							style={{
								maxWidth: selectedIndex === 0 ? 600 : 0,
								overflowX: "hidden",
								transition: "ease-in-out",
							}}>
							<Home />
						</div>
					</Collapse>
				</ToggleButton>
				<Divider />

				<ToggleButton
					className={
						selectedIndex === 1 ? "" : classes.tabButtonClosed
					}
					disableRipple={true}
					value="about"
					selected={selectedIndex === 1}
					onClick={event => handleTab(event, 1)}>
					<p style={styleFactory(selectedIndex, 1)}>About</p>
					<Collapse
						in={selectedIndex === 1}
						timeout={timings}
						mountOnEnter>
						<div
							style={{
								maxWidth: selectedIndex === 1 ? 600 : 0,
								overflowX: "hidden",
								transition: "ease-in-out",
							}}>
							<About />
						</div>
					</Collapse>
				</ToggleButton>

				<Divider />

				{Projects.map(project => [
					<ToggleButton
						className={
							selectedIndex === project.id
								? ""
								: classes.tabButtonClosed
						}
						disableRipple={true}
						value={project.id}
						key={project.name}
						selected={selectedIndex === project.id}
						onClick={event => handleTab(event, project.id)}>
						<p style={styleFactory(selectedIndex, project.id)}>
							{project.name}
						</p>
						<Collapse
							in={selectedIndex === project.id}
							timeout={timings}
							mountOnEnter>
							<div
								style={{
									maxWidth:
										selectedIndex === project.id ? 600 : 0,
									overflowX: "hidden",
									transition: "ease-in-out",
								}}>
								<ProjectCard
									name={project.name}
									repoLink={project.repoLink}
									deployedLink={project.deployedLink}
									description={project.description}
									img={project.img}
									techUsed={project.techUsed}
									role={project.role}
								/>
							</div>
						</Collapse>
					</ToggleButton>,
					<Divider key={project.id} />,
				])}
			</ToggleButtonGroup>
		</List>
	);
}

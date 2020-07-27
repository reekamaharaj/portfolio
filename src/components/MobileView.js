import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Home from "./Content/Home";
import ProjectCard from "./Content/ProjectCard";
import About from "./Content/About";
import Projects from "./Content/projects.json";

function TabPanel(props) {
	const { children, selectedIndex, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={selectedIndex !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{selectedIndex === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	selectedIndex: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		height: "100%",
		backgroundColor: "transparent",
	},
}));

export default function SimpleTabs() {
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleChange = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs
					selectedIndex={selectedIndex}
					onChange={handleChange}
					aria-label="simple tabs example">
					<Tab label="Home" {...a11yProps(0)} />
					<Tab label="About" {...a11yProps(1)} />
					{Projects.map(project => [
						<Tab
							key={project.name}
							label={project.name}
							{...a11yProps(project.id)}
						/>,
					])}
				</Tabs>
			</AppBar>
			<TabPanel selectedIndex={selectedIndex} index={0}>
				<Home />
			</TabPanel>
			<TabPanel selectedIndex={selectedIndex} index={1}>
				<About />
			</TabPanel>
			{Projects.map(project => [
				<TabPanel
					key={project.name}
					selectedIndex={selectedIndex}
					index={project.id}>
					<ProjectCard
						name={project.name}
						repoLink={project.repoLink}
						deployedLink={project.deployedLink}
						description={project.description}
						img={project.img}
						techUsed={project.techUsed}
						role={project.role}
					/>
				</TabPanel>,
			])}
		</div>
	);
}

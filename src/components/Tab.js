import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Home from "./Home";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import About from "./About";

const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
	},
	nested: {
		paddingLeft: theme.spacing(4),
		height: "100%",
	},
}));

export default function Tab() {
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const [openIndex, setOpenIndex] = React.useState(0);

	const handleTab = (event, index) => {
		setSelectedIndex(index);
		setOpenIndex(index);
	};

	return (
		<List className={classes.root}>
			<ToggleButtonGroup
				value={selectedIndex}
				exculsive="true"
				className={classes.nested}>
				<ToggleButton
					value="home"
					style={{ color: selectedIndex === 0 ? "red" : "blue" }}
					selected={selectedIndex === 0}
					onClick={event => handleTab(event, 0)}>
					<p
						style={
							({
								transform:
									selectedIndex === 0 ? "" : "rotate(90deg)",
							},
							{
								visibility: selectedIndex === 0 ? "hidden" : "",
							})
						}>
						Home
					</p>
					<Collapse in={openIndex === 0} timeout="auto" unmountOnExit>
						<Home />
					</Collapse>
				</ToggleButton>
				<Divider />
				<ToggleButton
					value="about"
					style={{ color: selectedIndex === 1 ? "red" : "blue" }}
					selected={selectedIndex === 1}
					onClick={event => handleTab(event, 1)}>
					<p
						style={
							({
								transform:
									selectedIndex === 1 ? "" : "rotate(90deg)",
							},
							{
								visibility: selectedIndex === 1 ? "hidden" : "",
							})
						}>
						About
					</p>
					<Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
						<About />
					</Collapse>
				</ToggleButton>
				<Divider />
				<ToggleButton
					value="project1"
					style={{ color: selectedIndex === 2 ? "red" : "blue" }}
					selected={selectedIndex === 2}
					onClick={event => handleTab(event, 2)}>
					<p
						style={
							({
								transform:
									selectedIndex === 2 ? "" : "rotate(90deg)",
							},
							{
								visibility: selectedIndex === 2 ? "hidden" : "",
							})
						}>
						Project1
					</p>
					<Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
						<Project1 />
					</Collapse>
				</ToggleButton>
				<Divider />
				<ToggleButton
					value="project2"
					style={{ color: selectedIndex === 3 ? "red" : "blue" }}
					selected={selectedIndex === 3}
					onClick={event => handleTab(event, 3)}>
					<p
						style={
							({
								transform:
									selectedIndex === 3 ? "" : "rotate(90deg)",
							},
							{
								visibility: selectedIndex === 3 ? "hidden" : "",
							})
						}>
						Project2
					</p>
					<Collapse in={openIndex === 3} timeout="auto" unmountOnExit>
						<Project2 />
					</Collapse>
				</ToggleButton>
				<Divider />
				<ToggleButton
					value="project3"
					style={{ color: selectedIndex === 4 ? "red" : "blue" }}
					selected={selectedIndex === 4}
					onClick={event => handleTab(event, 4)}>
					<p
						style={
							({
								transform:
									selectedIndex === 4 ? "" : "rotate(90deg)",
							},
							{
								visibility: selectedIndex === 4 ? "hidden" : "",
							})
						}>
						Project3
					</p>
					<Collapse in={openIndex === 4} timeout="auto" unmountOnExit>
						<Project3 />
					</Collapse>
				</ToggleButton>
				<Divider />
			</ToggleButtonGroup>
		</List>
	);
}

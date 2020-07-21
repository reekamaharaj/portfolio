import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		height: "100%",
		margin: 0,
		padding: 0,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
		height: "100%",
		width: "100%",
		margin: 0,
		padding: 0,
	},
}));

export default function Tab(props) {
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
					selected={selectedIndex === 0}
					onClick={event => handleTab(event, 0)}>
					Home
					<Collapse in={openIndex === 0} timeout="auto" unmountOnExit>
						<Home />
					</Collapse>
				</ToggleButton>

				<Divider />

				<ToggleButton
					value="portfolio"
					selected={selectedIndex === 1}
					onClick={event => handleTab(event, 1)}>
					Portfolio
					<Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
						<Portfolio />
					</Collapse>
				</ToggleButton>

				<Divider />

				<ToggleButton
					value="about"
					selected={selectedIndex === 2}
					onClick={event => handleTab(event, 2)}>
					About
					<Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
						<About />
					</Collapse>
				</ToggleButton>

				<Divider />

				<ToggleButton
					value="contact"
					selected={selectedIndex === 3}
					onClick={event => handleTab(event, 3)}>
					Contact
					<Collapse in={openIndex === 3} timeout="auto" unmountOnExit>
						<Contact />
					</Collapse>
				</ToggleButton>
			</ToggleButtonGroup>
		</List>
	);
}

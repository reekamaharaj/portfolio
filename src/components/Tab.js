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
					value="portfolio"
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
						Portfolio
					</p>
					<Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
						<Portfolio />
					</Collapse>
				</ToggleButton>
				<Divider />
			</ToggleButtonGroup>
		</List>
	);
}

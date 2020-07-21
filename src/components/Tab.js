import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
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
		<div className={classes.root}>
			<List component="nav" aria-label="main">
				<List component="div" disablePadding>
					<ToggleButtonGroup
						value={selectedIndex}
						exculsive="true"
						className={classes.nested}>
						<ToggleButton
							selected={selectedIndex === 0}
							onClick={event => handleTab(event, 0)}>
							{" "}
							Home
							<Collapse
								in={openIndex === 0}
								timeout="auto"
								unmountOnExit>
								<ListItemText primary="Inner Text" />
							</Collapse>
						</ToggleButton>

						<Divider />

						<ToggleButton
							selected={selectedIndex === 1}
							onClick={event => handleTab(event, 1)}>
							{" "}
							Portfolio
							<Collapse
								in={openIndex === 1}
								timeout="auto"
								unmountOnExit>
								<ListItemText primary="Inner Text" />
							</Collapse>
						</ToggleButton>

						<Divider />

						<ToggleButton
							selected={selectedIndex === 2}
							onClick={event => handleTab(event, 2)}>
							{" "}
							About
							<Collapse
								in={openIndex === 2}
								timeout="auto"
								unmountOnExit>
								<ListItemText primary="Inner Text" />
							</Collapse>
						</ToggleButton>

						<Divider />

						<ToggleButton
							selected={selectedIndex === 3}
							onClick={event => handleTab(event, 3)}>
							{" "}
							Contact
							<Collapse
								in={openIndex === 3}
								timeout="auto"
								unmountOnExit>
								<ListItemText primary="Inner Text" />
							</Collapse>
						</ToggleButton>
					</ToggleButtonGroup>
				</List>
			</List>
		</div>
	);
}

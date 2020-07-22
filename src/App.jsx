import React from "react";
import Tab from "./components/Tab";
import Container from "@material-ui/core/Container";
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
            <Tab height={100} width={100}/>
        </Container>
    </ThemeProvider>

);

export default App;

import React from "react";
import Content from "./components/Content/Content";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <WindowDimensionsProvider>
            <Content height={100} width={100}/>
        </WindowDimensionsProvider>
    </ThemeProvider>

);

export default App;

import React from "react";
import Content from "./components/Content/Content";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";

const App = () => (
    <WindowDimensionsProvider>
        <Content height={100} width={100}/>
    </WindowDimensionsProvider>
);

export default App;

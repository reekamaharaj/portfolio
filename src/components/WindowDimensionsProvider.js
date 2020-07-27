import React from "react";

export const WindowDimensionsCtx = React.createContext(null);

const windowDims = () => ({
	height: window.innerHeight,
	width: window.innerWidth,
});

const WindowDimensionsProvider = ({ children }) => {
	const [dimensions, setDimensions] = React.useState(windowDims());
	React.useEffect(() => {
		const handleResize = () => {
			setDimensions(windowDims());
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<WindowDimensionsCtx.Provider value={dimensions}>
			{children}
		</WindowDimensionsCtx.Provider>
	);
};

export default WindowDimensionsProvider;

export const useWindowDimensions = () => {
	return React.useContext(WindowDimensionsCtx);
};

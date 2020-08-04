import React from "/web_modules/react.js";
export const WindowDimensionsCtx = /*#__PURE__*/React.createContext(null);

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth
});

const WindowDimensionsProvider = ({
  children
}) => {
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
  return /*#__PURE__*/React.createElement(WindowDimensionsCtx.Provider, {
    value: dimensions
  }, children);
};

export default WindowDimensionsProvider;
export const useWindowDimensions = () => {
  return React.useContext(WindowDimensionsCtx);
};
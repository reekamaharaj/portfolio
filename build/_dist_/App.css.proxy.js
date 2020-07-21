
const code = ".App {\n\ttext-align: center;\n}\n\n.App-header {\n\tbackground-color: #282c34;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: white;\n}\n\n.App-link {\n\tcolor: #61dafb;\n}\n\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);

const code = "html, body, #root, #root>div {\n\theight: 100%;\n\twidth:100%;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat&display=swap');";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
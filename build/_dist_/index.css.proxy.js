
const code = "html, body {\n    background-image: linear-gradient(to right, purple , blue);\n}\n\nhtml,\nbody,\n#root,\n#root > div {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0;\n    padding: 0;\n    font-size: 16px;\n}\n\nimg {\n    width: 100%;\n}\n\nh1, h2, h3 {\n\tcolor: blue;\n    text-shadow: 0 0 5vw #2356FF;\n    font-family: 'Nothing You Could Do', cursive;\n    font-weight: bolder;\n    color: \"blue\";\n    box-shadow: \"0 0 15px blue\";\n    text-shadow: \"0 0 15px blue\";\n}\n\n\n@media only screen and (max-width: 700px){\n    body {\n        font-size: 16px;\n    }\n    img {\n        width: 49.99999%;\n        margin: 6px 0;\n    }\n}\n\n@media only screen and (max-width: 500px){\n    body {\n        font-size: 20px;\n    }\n    img {\n        width: 100%;\n    }\n\n}\n\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
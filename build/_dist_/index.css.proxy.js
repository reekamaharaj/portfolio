
const code = "html,\nbody,\n#root,\n#root > div {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nh1 {\n\tcolor: #426DFB;\n\tfont-size: 40px;\n    text-shadow: 0 0 3vw #2356FF;\n    font-family: 'Nothing You Could Do', cursive;\n\tfont-weight: bolder;\n}\n\nh3 {\n\tcolor: #426DFB;\n\tfont-size: 20px;\n    line-height: 25px;\n    text-shadow: 0 0 3vw #2356FF;\n    font-family: 'Nothing You Could Do', cursive;\n\tfont-weight: bolder;\n}\nh1 {\n    animation: flux 2s linear infinite;\n    -moz-animation: flux 2s linear infinite;\n    -webkit-animation: flux 2s linear infinite;\n    -o-animation: flux 2s linear infinite;\n}\n\n@keyframes h1 {\n    0%,\n    100% {\n    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;\n    color: #28D7FE;\n    }\n    50% {\n    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;\n    color: #146C80;\n    }\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);

const code = "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-ms-text-size-adjust: 100%; /* 2 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers (opinionated).\n   */\n\nbody {\n\tmargin: 0;\n}\n\n/**\n   * Add the correct display in IE 9-.\n   */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n\tdisplay: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n\tfont-size: 2em;\n\tmargin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in IE.\n   */\n\nfigcaption,\nfigure,\nmain {\n\t/* 1 */\n\tdisplay: block;\n}\n\n/**\n   * Add the correct margin in IE 8.\n   */\n\nfigure {\n\tmargin: 1em 40px;\n}\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n\tbox-sizing: content-box; /* 1 */\n\theight: 0; /* 1 */\n\toverflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * 1. Remove the gray background on active links in IE 10.\n   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n   */\n\na {\n\tbackground-color: transparent; /* 1 */\n\t-webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n   */\n\nb,\nstrong {\n\tfont-weight: inherit;\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font style in Android 4.3-.\n   */\n\ndfn {\n\tfont-style: italic;\n}\n\n/**\n   * Add the correct background and color in IE 9-.\n   */\n\nmark {\n\tbackground-color: #ff0;\n\tcolor: #000;\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 9-.\n   */\n\naudio,\nvideo {\n\tdisplay: inline-block;\n}\n\n/**\n   * Add the correct display in iOS 4-7.\n   */\n\naudio:not([controls]) {\n\tdisplay: none;\n\theight: 0;\n}\n\n/**\n   * Remove the border on images inside links in IE 10-.\n   */\n\nimg {\n\tborder-style: none;\n}\n\n/**\n   * Hide the overflow in IE.\n   */\n\nsvg:not(:root) {\n\toverflow: hidden;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers (opinionated).\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: sans-serif; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n\t/* 1 */\n\toverflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n\t/* 1 */\n\ttext-transform: none;\n}\n\n/**\n   * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n   *    controls in Android 4.\n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n  html [type=\"button\"], /* 1 */\n  [type=\"reset\"],\n  [type=\"submit\"] {\n\t-webkit-appearance: button; /* 2 */\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n\tpadding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n\tbox-sizing: border-box; /* 1 */\n\tcolor: inherit; /* 2 */\n\tdisplay: table; /* 1 */\n\tmax-width: 100%; /* 1 */\n\tpadding: 0; /* 3 */\n\twhite-space: normal; /* 1 */\n}\n\n/**\n   * 1. Add the correct display in IE 9-.\n   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n\tdisplay: inline-block; /* 1 */\n\tvertical-align: baseline; /* 2 */\n}\n\n/**\n   * Remove the default vertical scrollbar in IE.\n   */\n\ntextarea {\n\toverflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10-.\n   * 2. Remove the padding in IE 10-.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n\tbox-sizing: border-box; /* 1 */\n\tpadding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in Edge, IE, and Firefox.\n   */\n\ndetails, /* 1 */\n  menu {\n\tdisplay: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n\tdisplay: list-item;\n}\n\n/* Scripting\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 9-.\n   */\n\ncanvas {\n\tdisplay: inline-block;\n}\n\n/**\n   * Add the correct display in IE.\n   */\n\ntemplate {\n\tdisplay: none;\n}\n\n/* Hidden\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10-.\n   */\n\n[hidden] {\n\tdisplay: none;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
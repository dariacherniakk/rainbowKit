// Create a new script element
var scriptElement = document.createElement("script");
scriptElement.type = "module";
// scriptElement.crossOrigin = true;
scriptElement.src = "https://github.com/dariacherniakk/rainbowKit/blob/30f2d1dd3920b2676da21fec550e517d2df90b72/dist/assets/index-DuVApY9n.js";

// Create a new link element for CSS
var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
// linkElement.crossOrigin = true;
linkElement.href = "https://github.com/dariacherniakk/rainbowKit/blob/30f2d1dd3920b2676da21fec550e517d2df90b72/dist/assets/index-iGirBDd0.css";

// Append the script and link elements to the head of the document
document.head.appendChild(scriptElement);
document.head.appendChild(linkElement);
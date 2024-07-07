// Create a new script element
var scriptElement = document.createElement("script");
scriptElement.type = "module";
// scriptElement.crossOrigin = true;
scriptElement.src = "https://dariacherniakk.github.io/rainbowKit/dist/assets/index-DupJ1iX6.js";

// Create a new link element for CSS
var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
// linkElement.crossOrigin = true;
linkElement.href = "https://dariacherniakk.github.io/rainbowKit/dist/assets/index-iGirBDd0.css";

// Append the script and link elements to the head of the document
document.head.appendChild(scriptElement);
document.head.appendChild(linkElement);
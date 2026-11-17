var navlinks = {
  Home: "index.html",
  About: "about.html",
  "On Transformers": "transformers/index.html",
  "Disclaimers and Copyright": "disclaimer.html",
};

var loc = window.location.pathname.toLowerCase().split("/");
var depth = loc.length - loc.indexOf("arrenm.github.io") - 2;
var dir = "";
for (i = 0; i < depth; i++) {
  dir += "../";
}

var topnav = document.createElement("nav");
topnav.className = "topnav";

for (link in navlinks) {
  topnav.innerHTML +=
    '<a style="margin-left:0.5%; margin-right:0.5%" href="' +
    dir +
    navlinks[link] +
    '">' +
    link +
    "</a>\n";
}

document.body.appendChild(topnav);

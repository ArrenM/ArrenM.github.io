var navlinks = {
  Home: "index.html",
  About: "about.html",
  "On Transformers": "transformers/index.html",
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
    '<a href="' + dir + navlinks[link] + '">' + link + "</a>\n";
}

document.body.appendChild(topnav);

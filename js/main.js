var navlinks = { Home: "index.html", About: "about.html" };

var topnav = document.createElement("nav");
topnav.className = "topnav";

for (link in navlinks) {
  topnav.innerHTML += '<a href="' + navlinks[link] + '">' + link + "</a>\n";
}

document.body.appendChild(topnav);

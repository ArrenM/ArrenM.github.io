document.addEventListener("DOMContentLoaded", function (e) {
  var h2 = document.getElementsByTagName("h2");
  if (h2.length > 0) {
    var scripts = document.getElementsByTagName("script");
    for (i = 0; i < scripts.length; i++) {
      if (scripts.item(i).outerHTML.includes("js/contents.js")) {
        var script = scripts.item(i);
      }
    }
    if (script) {
      var numbered = script.getAttribute("numbered");
    }
    var table = document.createElement("table");
    table.innerHTML += "Contents";
    for (j = 0; j < h2.length; j++) {
      heading = h2.item(j);
      i = j + 1;
      if (heading) {
        var anchor = document.createElement("a");
        anchor.id = i;
        table.innerHTML += "<colgroup>";
        if (numbered == "true") {
          table.innerHTML += i + " - ";
        }
        table.innerHTML += '<a href="#' + i + '">' + heading.innerHTML + "</a>";
        table.innerHTML += "</colgroup>";
        heading.append(anchor);
      }
    }
    document.getElementsByTagName("h1")[0].appendChild(table);
  }
});

////////////////////////
// Licenced under the WTFPL
// Version: 1
//////////////////////////
// @include	http://tvtropes.org/*
// ==/UserScript==


var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].href = decodeURIComponent(links[i].href.replace("http://tvtropes.org/pmwiki/no_outbounds.php?o=", ""));
}
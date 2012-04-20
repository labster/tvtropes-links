////////////////////////// No Clickthrough Page for TV Tropes// Brent Laabs, April 2012
// Licenced under the WTFPL
// Version: 1
//////////////////////////// ==UserScript==// @name	No Clickthrough Page for TV Tropes// @description	Eliminates the clickthrough page on TV Tropes for external links.// @include	http://*tvtropes.org/*
// @include	http://tvtropes.org/*
// ==/UserScript==/////////////////////////


var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].href = decodeURIComponent(links[i].href.replace("http://tvtropes.org/pmwiki/no_outbounds.php?o=", ""));
}

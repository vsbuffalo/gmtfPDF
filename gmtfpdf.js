function replaceAllLinkSuffixes(str, replace) {
  $('a[href$="' + str + '"]').attr("href", function(index, attr) { return attr.replace(str, replace); } );
}
replaceAllLinkSuffixes("pdf+html", "pdf");
replaceAllLinkSuffixes("pdf+html?with-ds=yes", "pdf?with-ds=yes");

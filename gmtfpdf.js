function replaceAllLinkSuffixes(str, replace) {
  $('a[href$="' + str + '"]').attr("href", function(index, attr) { return attr.replace(str, replace); } );
}

replacements = [
  ["pdf+html", "pdf"],
  ["pdf+html?with-ds=yes", "pdf?with-ds=yes"],
  ["/epdf", "/pdf"]
];

for (i in replacements) replaceAllLinkSuffixes.apply($, replacements[i]);

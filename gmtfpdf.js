$('a[href$="pdf+html"]').attr("href", function(index, attr) { return attr.replace("pdf+html", "pdf"); });

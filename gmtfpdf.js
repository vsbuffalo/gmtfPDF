var nodes = document.querySelectorAll('a[href*="pdf+html"]');

for (var i = 0; i < nodes.length; i++) {
  var node = nodes[i];

  node.href = node.href.replace(/pdf\+html($|\?)/, 'pdf$1');
}

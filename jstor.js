
//remove and re-attach a node.  This detaches any event handlers associated
// with it, even though we don't have access to the site's own JQuery object
// Source: http://stackoverflow.com/questions/5530843/use-chrome-extension-to-unbind-click-events
var unbind_event_listeners = function (node) {
    var parent = node.parentNode;
    if (parent) {
        parent.replaceChild(node.cloneNode(true), node);
    } else {
        var ex = new Error("Cannot remove event listeners from detached or document nodes");
        ex.code = DOMException[ex.name = "HIERARCHY_REQUEST_ERR"];
        throw ex;
    }
};

//modify the link to go straight to the pdf
function modifyJstorPdfLinks() {
  $("#pdf.pdflink").attr('target', '_self');
  $("#pdf.pdflink").attr("href", function(index, attr) {return attr += '?acceptTC=true&jpdConfirm=true'});
}

modifyJstorPdfLinks();

//var nodes = document.querySelectorAll('a[class="pdflink"]'), i = nodes.length;
//while (i--) {
    unbind_event_listeners($("#pdf.pdflink").get(0));
//}



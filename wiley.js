// Wrap in a function to allow try/catch-and-return safeguard, calling it immediately

(function GoToWileyPDF() {
  try {
    pdf_iframe = document.querySelector('iframe#pdfDocument');
    pdf_link = pdf_iframe.getAttribute('src');
    // Navigate directly to the PDF
    window.location.href = pdf_link;
  } catch(e) {
    console.log("Error while attempting to determine PDF URL:\n", e)
    return
  }
})();

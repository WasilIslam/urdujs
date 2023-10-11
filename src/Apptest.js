import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import pdfjsLib from "pdfjs-dist";

// Configure the PDF.js worker

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;
function App2() {
  const [originalText, setOriginalText] = useState("");
  const [editedText, setEditedText] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    setPdfFile(selectedFile);

    // Extract text from the selected PDF
    const pdfText = await extractTextFromPDF(selectedFile);

    if (pdfText) {
      setOriginalText(pdfText);

      // Edit the PDF and extract the edited text
      const editedPdfData = await editPdf(selectedFile, "This is added text!");
      const editedPdfText = await extractTextFromPDF(editedPdfData);
      setEditedText(editedPdfText);
    }
  };

  const extractTextFromPDF = async (pdfFile) => {
    try {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const data = await pdfParseArrayBuffer(arrayBuffer);
      return data.text;
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
      return null;
    }
  };

  const pdfParseArrayBuffer = (data) => {
    return new Promise((resolve, reject) => {
      pdfjsLib.getDocument({ data }).then((pdfDocument) => {
        const numPages = pdfDocument.numPages;
        const promises = [];

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          promises.push(
            pdfDocument.getPage(pageNum).then((page) => {
              return page.getTextContent().then((textContent) => {
                return textContent.items.map((item) => item.str).join(" ");
              });
            })
          );
        }

        Promise.all(promises)
          .then((pagesText) => {
            const text = pagesText.join("\n");
            resolve({ text });
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  };

  const editPdf = async (pdfFile, addedText) => {
    try {
      const pdfData = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfData);
      const [page] = pdfDoc.getPages();
      const helveticaFont = await pdfDoc.embedFont(
        PDFDocument.StandardFonts.Helvetica
      );

      page.drawText(addedText, {
        x: 50,
        y: 50,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      const editedPdfData = await pdfDoc.save();
      return new Blob([editedPdfData], { type: "application/pdf" });
    } catch (error) {
      console.error("Error editing PDF:", error);
      return null;
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {originalText && <div>Original Text: {originalText}</div>}
      {editedText && <div>Edited Text: {editedText}</div>}
    </div>
  );
}

export default App2;

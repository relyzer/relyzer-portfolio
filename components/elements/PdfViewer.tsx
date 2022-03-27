import React, { useState } from "react";

import { Document, Page, pdfjs} from "react-pdf";

// import workerSrc from "../../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

type Props = {
  filename: string;
  width?: number;
  id: string;
};

const PdfViewer = ({ filename, width, id }: Props) => {
  const [file, setFile] = useState(`./online_certificates/${filename}.pdf`);
  const [numPages, setNumPages] = useState(null);

  // const onFileChange = (event: any) => {
  //   setFile(event.target.files[0]);
  // };

  const onDocumentLoadSuccess = ({ numPages}) => {
    setNumPages(numPages);
  };

  return (
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess} >
        {Array.from({ length: numPages }, (_, index) => (
          <Page key={id} pageNumber={index + 1} width={width} renderTextLayer={false} renderAnnotationLayer={false} />
        ))}
      </Document>
  );
};

export default PdfViewer;

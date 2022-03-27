import React from "react";
import dynamic from "next/dynamic";

import generateUniqueID from "../../lib/utility/generateUniqueID";
import { useHorizontalScroll } from "../../lib/utility/useHorizontalScroll";
import { OnlineCertificate } from "../../interfaces/onlineCertificate";

const PdfViewer = dynamic(() => import("../elements/PdfViewer"), {
  ssr: false,
});

const CertificateGallery = () => {
  const scrollRef = useHorizontalScroll();
  const certificateArr: OnlineCertificate[] = [
    {
      id: generateUniqueID(),
      filename: "Coursera-JV5Y6J77YNNJ",
    },
    {
      id: generateUniqueID(),
      filename: "Coursera-LCGWDBUBA6PG",
    },
    {
      id: generateUniqueID(),
      filename: "Coursera-WSQNVUG8UFA5",
    },
  ];

  return (
    <div className="flex p-2 overflow-auto" ref={scrollRef}>
      {certificateArr.map((cert: OnlineCertificate) => (
        <div className="px-2" key={cert.id}>
          <PdfViewer id={cert.id} filename={cert.filename} />
        </div>
      ))}
    </div>
  );
};

export default CertificateGallery;

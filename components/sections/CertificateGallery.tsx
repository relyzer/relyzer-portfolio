import React from "react";
import dynamic from "next/dynamic";

import { certificateArr } from "../../model/certificateData";
import { useHorizontalScroll } from "../../lib/utility/useHorizontalScroll";
import { OnlineCertificate } from "../../interfaces/onlineCertificate";

const PdfViewer = dynamic(() => import("../elements/PdfViewer"), {
  ssr: false,
});

const CertificateGallery = () => {
  const scrollRef = useHorizontalScroll();
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

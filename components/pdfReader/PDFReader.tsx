import React, { useState } from 'react';
// import PdfViewer from "./pdfViewer"

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import( "./pdfViewer"), {
  ssr: false,
});

export default PdfViewer;

export const PDFReader = () => {

    return (
        <div className='w-screen h-screen '>
            <PdfViewer file="" />
        </div>
        )
}
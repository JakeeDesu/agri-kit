import React, { useState } from 'react';
import PdfViewer from "./pdfViewer"



export const PDFReader = () => {

    return (
        <div className='w-full h-full flex justify-center items-center overflow-y-scroll'>
            <PdfViewer file="/pdf-reader/FertiEdge.pdf" />
        </div>
        )
}
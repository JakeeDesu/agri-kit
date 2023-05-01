import React, { useState } from 'react';
import PdfViewer from "./pdfViewer"



export const PDFReader = () => {

    return (
        <div className='w-full h-screen pt-10 overflow-y-scroll'>
            <PdfViewer file="./pdf-reader/FertiEdge.pdf" />
        </div>
        )
}
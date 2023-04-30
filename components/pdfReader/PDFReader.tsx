import React, { useState } from 'react';
import PdfViewer from "./pdfViewer"



export const PDFReader = () => {

    return (
        <div className='w-full h-full overflow-y-scroll'>
            <PdfViewer file="./ACD.pdf" />
        </div>
        )
}
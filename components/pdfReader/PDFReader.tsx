import React, { useState, useContext } from 'react';
import { G_Context } from "../contexts/globalContext";

import PdfViewer from "./pdfViewer"

// import dynamic from 'next/dynamic';

// const PdfViewer = dynamic(() => import( "./pdfViewer"), {
//   ssr: false,
// });

// export default PdfViewer;

export const PDFReader = () => {
    const context = useContext(G_Context)
    const isVisible = context.onDisplay == 0
    const formLogo = context.formData.logo
    const goBack = () => context.changeDisplay(1)
    
    return (
        <div className='relative flex justify-center items-center  w-screen h-screen '>
            <div className='absolute left-0 top-0 '>
            <div className='relative h-36 w-52 rounded-full ring-gray-700 ring-1 bg-gray-900 -translate-x-1/2 -translate-y-1/2 hover:-translate-x-1/3 hover:shadow-xl transition-all duration-300 ease-in-out'
                onClick={goBack}
            >
                <div className='absolute h-fit w-fit left-1/2 top-1/2 p-4 '>
                    <p className='font-bold text-gray-100'>Go Back</p>
                </div>
            </div>
            </div>
            <PdfViewer file="" />
        </div>
        )
    }
    
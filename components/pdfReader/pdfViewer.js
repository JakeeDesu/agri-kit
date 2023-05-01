// components/PdfViewer.js
import React, { useState, useRef, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const IndexedPage = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>

        {props.children}

    </div>
  );
});

const PdfViewer = ({ file }) => {

  return (
    <div  className='pt-10 h-full w-full'>
      {/* <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      > */}
         <HTMLFlipBook
            // className='w-full h-full'
            // width={300}
            // height={400 }
            // size="fixed"
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
          >
            {
            ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15"].map(elem => (
                    <div key={elem} className="w-full h-full  overflow-hidden">
                        <img className="w-full h-full object-contain object-center" src={`/AgriEdge/AgriEdge_brochure_V6-${elem}.png`} alt=""/>
                    </div>
            ))
          }


                    
                    {/* <div key={'3'} className="w-full h-full  overflow-hidden ">
                        <img className="w-full h-full object-contain object-center" src="/AgriEdge/AgriEdge brochure V6-02.png" alt=""/>
                    </div>
                    
                     <div key={'4'} className="h-full w-full overflow-hidden ">
                        <img className="w-full h-full object-contain object-center" src="/AgriEdge/AgriEdge brochure V6-03.png" alt=""/>
                    </div>


                    <div key={'5'} className="w-full h-full  overflow-hidden">
                        <img className="w-full h-full object-contain object-center" src="/AgriEdge/AgriEdge brochure V6-04.png" alt=""/>
                    </div> */}
        {/* {Array.from(new Array(numPages), (el, index) => (
          <div   ref={containerRef} className='h-full w-full' key={`page_${index + 1}`}>
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              />
          </div>
        ))} */}
        </HTMLFlipBook>
      {/* </Document> */}
    </div>
  );
};

const Wrr = ({index}) => {
  return (
    <div  className='w-full h-full'> 
    <Page
      key={`page_${1}`}
      pageNumber={1}
      width={pageWidth}
      />
  </div>
  )
}
export default PdfViewer;

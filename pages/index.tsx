import { useContext } from 'react'
import Image from 'next/image'

import { Layout } from '../components/layout'
import { AgriEdgeForm } from '@/components/form/agriEdgeForm'
import { AgriEdgeProducts } from '@/components/products/agriEdgeProducts'
import { PDFReader } from '@/components/pdfReader/PDFReader'
import { G_Context, G_Context_Wrraper } from '@/components/contexts/globalContext'
import { AnimatePresence, delay, motion } from 'framer-motion'




export default function Home() {
  return (
      <Layout>
        <G_Context_Wrraper>
          <AgriEdge/>
        </G_Context_Wrraper>
    </Layout>
  )
}



const frameVariants = {
  show : {
    display : "none",
    opacity : 0
  },
  display : {
    display : "flex",
    opacity : 1,
  },
  disappear : {
    opacity : 0,
    transition : {
      duration : 1
    }
  },
}

const AgriEdge = () => {
  const context = useContext(G_Context)

  return (
    <div className='w-full h-full'>
    <AnimatePresence>
    {context.onDisplay == 0 && <motion.div
          key="form"
          className='w-full h-full flex justify-center items-center p-0 m-0'
          variants={frameVariants}
          initial="show"
          animate="display"
          transition={{
            ease : 'easeInOut',
            duration : 1,
            delay : 1
          }}
          exit={{
            opacity : 0,
            transition : {
              duration : 1
            }
          }}
        >
          <AgriEdgeForm/>
      </motion.div>}

      {context.onDisplay == 1 && <motion.div
          className='w-full h-full flex justify-center items-center p-0 m-0'
          key="product"
          variants={frameVariants}
          initial="show"
          animate="display"
          transition={{
            ease : 'easeInOut',
            duration : 1,
            delay : 1
          }}
          exit={{
            opacity : 0,
            transition : {
              duration : 1
            }
          }}
        >
          <AgriEdgeProducts/>
        </motion.div>}


      </AnimatePresence>
        {context.onDisplay == 2 && 
          <div className='h-full w-full bg-black'>
            <PDFReader/>

          </div>
          }
    </div>
  )
}

// import dynamic from "next/dynamic";

// const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
//   ssr: false
// });

// export default function PDF() {
//   return <div className='h-full w-full '>
//     <PDFViewer />
//     </div>
// }

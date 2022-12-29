import React, { useState, useEffect } from 'react';

type Props = {
    pdfUrl: string
    width: number
    height: number
}

const PDFReader = ({pdfUrl, width, height}:Props) => {
   const [ mounted, setMounted ] = useState(false)

   useEffect(()=>{
      setMounted(true)
      return () => {
          setMounted(false)
      }
   },[])

   return (
      <>
        {
          mounted && 
          <div className='flex justify-center'>
             <object data={pdfUrl} type="application/pdf" width={width} height={height} >
                <iframe src={pdfUrl} width={width} height={height}>
                   <p>Este navegador no soporta pdf!</p>
                </iframe>
             </object>
          </div>
        }
      </>
   )
}

export default PDFReader

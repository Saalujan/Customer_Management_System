import React, { useEffect, useRef } from 'react'
import CloudinaryImage from '../CloudinaryImage/CloudinaryImage';



export const UploadWidget = () => {

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dcvaihbup',
        uploadPreset: 'lry1mocw'
      },
      function (error, result) {
        if(result.event == 'success'){
          console.warn(result.info.public_id)
        }
      }
    )


  }, [])
  return (
    <>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
      {/* <CloudinaryImage publicId="mlhtelvcfaas06simzie"/> */}
      
      </>

  )
}

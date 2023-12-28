import React from 'react' 
import './assets/App.css'

const defaultImageGallery = [
  "Image-1",
  "Image-2",
  "Image-3",
  "Image-4",
  "Image-5",
]

export default function App() {
  const [gallery, setGallery] = React.useState(defaultImageGallery)
  const [currentImage, setCurrentImage] = React.useState(0)

  return <main>
    {gallery.map((image, i)=>{
      return <div 
        key={Math.random()} 
        className={currentImage === i ? "selected": ""}
        onClick={()=>{
          if(i === currentImage-1 || i === currentImage+1) setCurrentImage(i)
        }}
      >
        {image}
      </div>
    })}
  </main>
}
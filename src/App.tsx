import React from 'react' 
import './assets/App.css'
import image1 from './assets/estatua.png'
import image2 from './assets/medieval city ideas 2.png'
import image3 from './assets/medieval-city ideas 3.jpg'
import image4 from './assets/medieval-city ideas.jpg'

const defaultImageGallery = [
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4,
]

export default function App() {
  const gallery = defaultImageGallery

  const changeByKey = (e: KeyboardEvent)=>{
    let change = e.key === "ArrowRight" ? 1 : -1
    let galleryList = document.querySelector(".gallery")

    if(!galleryList) return

    let selected = 0
    let list = galleryList.children
    for(let i=0;i< list.length; i++){
      if(list[i].classList.contains("selected")) {
        selected = i
        break
      }
    }
    
    list[selected].classList.remove("selected")
    let newValue = selected + change
    
    if(newValue === -1) newValue = gallery.length-1
    else if(newValue === gallery.length) newValue = 0

    list[newValue].classList.add("selected")
  }

  React.useEffect(()=>{
    document.addEventListener('keydown', changeByKey)
  })

  return <main className='gallery'>
    {gallery.map((image, i)=>{
      return <img 
        key={Math.random()} 
        src={image}
        className={i === 0 ? "image selected": "image"}
        onClick={(e)=>{
          let selected = document.querySelector(".selected")
          selected?.classList.remove("selected")
          e.currentTarget.classList.add("selected")
        }}
        />
    })}
  </main>
}
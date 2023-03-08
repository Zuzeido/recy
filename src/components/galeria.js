import React, {useState} from 'react'
import './img/gallery.css'
import CloseIcon from '@mui/icons-material/Close'
import Img1 from "./img/1.JPG"
import Img2 from "./img/2.JPG"
import Img3 from "./img/3.JPG"
import Img4 from "./img/4.JPG"
import Img5 from "./img/5.JPG"
import Img6 from "./img/6.JPG"

const Galeria = () => {
  let data = [
    {
      id:1,
      imgSrc: Img1
    },
    {
      id:2,
      imgSrc: Img2
    },
    {
      id:3,
      imgSrc: Img3
    },
    {
      id:4,
      imgSrc: Img4
    },
    {
      id:5,
      imgSrc: Img5
    },
    {
      id:6,
      imgSrc: Img6
    }
  ]
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('')
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
  }
  return (
    <>
    <div className={model? "model open" : "model"}>
      <img src={tempimgSrc} />
      <CloseIcon onClick={() => setModel(false)}/>
    </div>
    <div className='gallery'>
      {data.map((item, index) =>{
  return (
    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
      <img src={item.imgSrc} style={{width: '100%'}}/>
    </div>
  )
})}
</div>
</>
  )}

export default Galeria
import "./carrossel.style.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

import { useState } from 'react'

export const Carrossel = () => {
  const imagens = [img1, img2, img3]
  const [index, setIndex] = useState(0)

  const proximo = () => {
    setIndex((prev) => (prev + 1) % imagens.length)
  }

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagens.length) % imagens.length)
  }

  return (
    <div className="carrossel-container">
      <button className="btn-nav" onClick={anterior}>{'<'}</button>

      <img
        src={imagens[index]}
        className="carrossel-img"
        alt="slide"
      />

      <button className="btn-nav" onClick={proximo}>{'>'}</button>
    </div>
  )
}

import React from 'react'
import '../../styles/hero.css'
import imghero from '../../assets/img/imgHero.svg'

const hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <h2 className="highlight">Lorem ipsum dolor sit amet.</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel consequatur maiores enim est iusto.</p>
            <div className="hero_btns">
              <button className="primary_btn">GitHub</button>
              <button className="secondary_btn">LinkedIn</button>
            </div>
          </div>

          <div className="hero_img">
            <img src={imghero} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero
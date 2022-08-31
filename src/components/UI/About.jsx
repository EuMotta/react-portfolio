import React from 'react'
import '../../styles/about.css'
import about_img from '../../assets/img/heart.jpg'
import ProgressBar from "@ramonak/react-progress-bar";

const chooseData = [
  {
    icon: 'ri-wifi-line',
    title: 'Primeiro projeto',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati incidunt maiores dolorem harum.',
    now: 43
  },
  {
    icon: 'ri-team-line',
    title: 'Segundo projeto',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati incidunt maiores dolorem harum.',
    now: 53
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Terceiro projeto',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati incidunt maiores dolorem harum.',
    now: 63
  },
  {
    icon: 'ri-apps-line',
    title: 'Quarto projeto',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati incidunt maiores dolorem harum.',
    now: 33
  }
]

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about_top-content">
          <h6 className='subtitle'>Sobre Mim</h6>
          <h2>Habilidades e linguagens</h2>
          <h2 className="highlight"> mais estudadas</h2>
          <p className="description about_content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis animi laudantium qui ut nisi.</p>
        </div>
        <div className="about_wrapper">
          <div className="about_content">

            <div className='choose_item-wrapper'>
              {
                chooseData.map((item, index) => (
                  <div className="choose_me-item" key={index}>
                    <span className="choose_me-icon">
                      <i className={item.icon}></i>
                    </span>
                    <h4 className="choose_me-title">{item.title}
                      <p className="description">{item.desc}</p>
                      <ProgressBar animateOnRender="true" initCompletedOnAnimation="0" transitionTimingFunction="ease-in-out" transitionDuration="4s" height='10px' labelSize='10px' labelColor='var(--heading-color)' bgColor='var(--primary-color)' labelAlignment='left' completed={`${item.now}`} />
                    </h4>
                  </div>
                ))
              }
            </div>



          </div>
          <div className="about_img rounded"><img src={about_img} alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default About
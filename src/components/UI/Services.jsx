import React from 'react'
import Marquee from 'react-fast-marquee'
import '../../styles/services.css'
// import video from '../../assets/video/video (1).mp4'

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "Aplicativos desenvolvidos",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nesciunt."
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Designer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nesciunt."
  },
  {
    icon: "ri-landscape-line",
    title: "Desginer Gráfico",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nesciunt."
  },
  {
    icon: "ri-terminal-box-line",
    title: "Front / Back-end Development",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nesciunt."
  }
]

const Services = () => {
  return (
    <section id="services">
      <div className="container container-card">
        <div className="services_top-content">
          <h6 className='subtitle'>Meus serviços</h6>
          <h2>Criamos seus projetos</h2>
          <h2 className="highlight">com qualidade.</h2>
        </div>
        {/* <Marquee  pauseOnHover gradientColor={'rgb(248,251,253)'} speed={60} loop={-1}> */}
        <div className="services-item-wrapper">
          {/* Banco de Dados */}
          {
            serviceData.map((item, index) =>
              <div className="services-item" key={index}>
                <span className="services-icon">
                  <i class={item.icon}></i>
                </span>
                <h3 className="services_title">{item.title}</h3>
                <p className="description">{item.desc}</p>
              </div>
            )
          }
        </div>
        {/* </Marquee> */}
      </div>
    </section>
  )
}

export default Services
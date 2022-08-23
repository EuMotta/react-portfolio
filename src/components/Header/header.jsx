import React from 'react'
import './header.css'

const nav_links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#projects",
    display: "Contato",
  },
  {
    path: "#contact",
    display: "Contact",
  }
]
const header = () => {
  return (
    <header className='header'>
      <div className="container">
        <nav className="nav_bar">
          <div className="logo"><h2>José Antonio</h2></div>
          {/* Barra de navegação */}
          <div className="navigation">
            <ul className="menu">
              {
                nav_links.map((item, index) => (
                  <li className="menu_item">
                    <a href={item.path} className="menu_index">
                      {item.display}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          {/* lightmode */}
          <div className="light_mode">
            <span>
            <i class="ri-sun-line"></i>LightMode
            </span>
          </div>
          {/* login */}
        </nav>
      </div>
    </header>

  )
}

export default header
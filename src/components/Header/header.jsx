import React, { useEffect, useRef } from 'react'
import './header.css'
import mylogo from '../../assets/Logo/jam.svg'
import moon from '../../assets/icons/moon.svg'
import sun from '../../assets/icons/sun.svg'



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
    display: "Projetos",
  },
  {
    path: "#images",
    display: "Imagens",
  },
  {
    path: "#contact",
    display: "Contact",
  }
]
const Header = ({ theme, troggleTheme }) => {
  const headerRef = useRef(null)
  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('header_shrink')
    } else {
      headerRef.current.classList.remove('header_shrink')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)

  }, [])
  const handleClick = e => {
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop
    window.scrollTo({
      left: 0,
      top: location - 80,
    })
  }
  return (
    <header className='header' ref={headerRef}>
      <div className="container">
        <nav className="nav_bar">
          <div className="logo"><img src={mylogo} alt="" /></div>
          {/* Barra de navegação */}
          <div className="navigation">
            <ul className="menu">
              {
                nav_links.map((item, index) => (
                  <li className="menu_item" key={index}>
                    <a href={item.path} onClick={handleClick} className="menu_index">
                      {item.display}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          {/* lightmode */}
          <div className="light_mode icons_lightmode">
            <span onClick={troggleTheme}>
              {
                theme === "light-theme" ? (
                  <span className='dark-theme'>
                    <img style={{ width: '1.7rem' }} src={moon} alt="" />
                  </span>
                ) : (
                  <span>
                    <img style={{ width: '2.5rem' }} src={sun} alt="" />
                  </span>
                )
              }
            </span>
          </div>
          {/* login */}
        </nav>
      </div>
    </header>

  )
}

export default Header
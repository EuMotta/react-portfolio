import React from "react";
import "./footer.css";
import logo from '../../assets/Logo/jam.svg'

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];
const quickLinks02 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Documentation",
  },
  {
    path: "#",
    display: "Guides",
  },
];
const quickLinks03 = [
  {
    path: "#About",
    display: "About",
  },
  {
    path: "#Services",
    display: "AServices",
  },
  {
    path: "#Contact",
    display: "Contact",
  },
];
const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="svg">
          <img src="" alt="" />
        </div>
        <div className="footer_wrapper">
          <div className="footer_logo">
            <img src={logo} alt="" />
            <p className="description">Trabalhe conosco</p>
            <div className="small_text description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              harum perspiciatis laborum aliquam dignissimos assumenda cumque
              rerum eos?
            </div>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Suport</h3>
            <ul className="quick_links">
              {quickLinks01.map((item, index) => (
                <li className="quick_link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_quick-links">
            <h3 className="quick_links-title">Company</h3>
            <ul className="quick_links">
              {quickLinks03.map((item, index) => (
                <li className="quick_link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright   {year}, desenvolvido por José Antonio Motta. Todos os direitos
          reservados
        </p>
        
      </div>
    </footer>
  );
};

export default footer;

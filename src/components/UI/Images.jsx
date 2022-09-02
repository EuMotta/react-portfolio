import React from 'react'
import '../../styles/images.css'
import Carousel from 'nuka-carousel'
import img1 from '../../assets/img/img (1).png'
import img2 from '../../assets/img/img (2).png'
import img3 from '../../assets/img/img (3).png'
import img4 from '../../assets/img/img (4).png'
import img5 from '../../assets/img/img (5).png'
import img6 from '../../assets/img/img (6).png'
import img7 from '../../assets/img/img (7).png'
import img8 from '../../assets/img/img (8).png'
import img9 from '../../assets/img/img (9).png'
import img10 from '../../assets/img/img (10).png'

const Images = () => {
    return (
        <section id='images' className="me_carousel">
            <div className="container">
                <div className="carousel_content">
                    <h6 className="subtitle">Carousel</h6>
                    <h2>Meus projetos <span className="highlight">Web</span></h2>
                </div>
                <div className="carousel_wrapper">
                    <div className="carousel_item">
                        <div className="carousel_img">
                            <Carousel
                            cellSpacing={50}
                             className='carousel'
                                slidesToShow={3}
                                pauseOnHover
                                wrapAround={true}
                                autoplay={true}
                                adaptiveHeightAnimation={true}
                                style={{height:'30rem'}}>
                                <img src={img1} alt="" />
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                                <img src={img4} alt="" />
                                <img src={img5} alt="" />
                                <img src={img6} alt="" />
                                <img src={img7} alt="" />
                                <img src={img8} alt="" />
                                <img src={img9} alt="" />
                                <img src={img10} alt="" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Images
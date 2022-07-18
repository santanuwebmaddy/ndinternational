import React, { Component } from "react"
import Slider from "react-slick"
//Import Images
import Image from 'next/image'
import Bata from '../public/img/logo/bata.jpg'
import Berger from '../public/img/logo/berger.jpg'
import Bp from '../public/img/logo/bp.jpg'
import britannia from '../public/img/logo/britannia.jpg'
import dabur from '../public/img/logo/dabur.jpg'
import dvc from '../public/img/logo/dvc.jpg'
import hyatt from '../public/img/logo/hyatt.jpg'
import lt from '../public/img/logo/lt.jpg'
import oberoi from '../public/img/logo/oberoi.jpg'
import pepsico from '../public/img/logo/pepsico.jpg'
import seimens from '../public/img/logo/seimens.jpg'
import tata from '../public/img/logo/tata.jpg'
import yule from '../public/img/logo/yule.jpg'
import unilever from '../public/img/logo/unilever.jpg'



function Test(){
  const settings = {
    dots: false,
    autoplay:true,
    autoplaySpeed:3000,
    infinite: true,
    slidesToShow:8,
    slidesToScroll: 2,
    speed: 2000,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }
  return(
    <div>
      
      <div className="section section-clients">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-once="true"
            >
              <h2 className="text-center title-after-before">ESTEEMED CLIENTS</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-once="true"
            >
              <Slider {...settings} className="mt-25 clientsLogo">
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={Bata} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={Berger} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={Bp} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={britannia} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={dabur} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={dvc} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={hyatt} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={lt} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={oberoi} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={pepsico} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={seimens} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={tata} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={yule} quality={100} />
                </div>
                <div style={{marginLeft:15, marginRight:15}}>
                <Image src={unilever} quality={100} />
                </div>
              </Slider>

             
            </div>
          </div>
        </div>
      </div>




      
    </div>
  )
}
export default Test
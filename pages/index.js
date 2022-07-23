import Header from "../components/Header";
import Footer from "../components/Footer";
import Clients from "../components/Logos";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
//Import Images
import Image from 'next/image'
import Lab from '../public/img/lab.svg'
import Microbio from '../public/img/microbio.svg'
import Quality from '../public/img/quality.svg'
import Export from '../public/img/expert.svg'


function Home(){
  const settings = {
    dots: false,
    autoplay:true,
    infinite: true,
    autoplaySpeed:5000,
    arrows:false,
    fade: true,
    speed:2000,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return(
    <>
    <div className="banner mobileBanner" style={{backgroundImage: 'url("img/banner1.webp")'}}>
      <div className="overlay" />
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>
                KNOWN THE WORLD OVER FOR <br />
                COMMITMENT TOWARDS <br />
                ACCURACY AND RELIABILITY
              </h2>
              <p>
                Carrying on our testing legacy <span>since 1892</span>
              </p>
              <Link href="/contact" passHref>
                <a  className="btn btn-primary">Get in touch</a>
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div className="banner">
      <Slider {...settings}>
        <div>
          <div className="bannerImage" style={{backgroundImage: 'url("img/banner1.webp")'}}></div>
        </div>
        <div>
          <div className="bannerImage" style={{backgroundImage: 'url("img/banner2.jpg")'}}></div>
        </div>
      </Slider>
        <div className="overlay" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2>
                  KNOWN THE WORLD OVER FOR <br />
                  COMMITMENT TOWARDS <br />
                  ACCURACY AND RELIABILITY
                </h2>
                <p>
                  Carrying on our testing legacy <span>since 1892</span>
                </p>
                <Link href="/contact" passHref>
                  <a  className="btn btn-primary">Get in touch</a>
                </Link>
              </div>
            </div>
          </div>
        </div> 
      </div>
      {/* services */}
      <div className="services">
        <div className="container">
          <div className="col-md-3 no-padding">
            <Link href="#whatwe">
              <a className="page-scroll">
                <div className="parent-div green">
                  <div className="child-div">
                    <div className="circle">
                      <Image src={Lab} alt="lab"/>
                    </div>
                    <p>
                      CHEMICAL <br />
                      ANALYSYS
                    </p>
                    <div className="line" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-md-3 no-padding">
            <Link href="#whatwe" passHref>
             <a className="page-scroll">
              <div className="parent-div yellow">
                  <div className="child-div">
                    <div className="circle">
                      <Image src={Microbio} alt="Mic" />
                    </div>
                    <p>
                      MICROBIOLOGICAL <br />
                      ASSAY
                    </p>
                    <div className="line" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-md-3 no-padding">
            <Link href="/inspection-services" passHref>
              <a>
                <div className="parent-div orange">
                  <div className="child-div">
                    <div className="circle">
                      <Image src={Quality} alt="qua" />
                    </div>
                    <p>
                      INSPECTION OF <br /> COMODITIES
                    </p>
                    <div className="line" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-md-3 no-padding">
            <div className="parent-div dark-orange">
              <div className="child-div">
                <div className="circle">
                  <Image src={Export} alt="exp" />
                </div>
                <p>
                  {" "}
                  TURNKEY PROJECT <br />
                  ON WTP, ETP, STP, RO, DM
                </p>
                <div className="line" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div
        className="section section-about"
        style={{ backgroundImage: 'url("img/bg-home.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div
                className="basic-padding"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-once="true"
              >
                <h2>
                  <span>WE ENSURE YOU ALWAYS GET THE</span>
                  PERFECT RESULTS
                </h2>
                <h3>
                  <span>ND INTERNATIONAL</span> is one of the leading
                  <br />
                  companies in the fields of testing of
                  <br />
                  commodities, certification and inspection
                </h3>
              </div>
            </div>
            <div className="col-md-7">
              <div className="basic-padding mt-10">
                <p data-aos="fade-up" data-aos-delay={250} data-aos-once="true">
                  N.D. International is a multinational organisation located in
                  India and Japan. Our ultramodern laboratory is accreditated by
                  NABL, ISO 9001:2015 Certified and recognised by other governmental
                  departments. We are committed to provide accurate inspection and
                  Testing services.
                </p>
                <p data-aos="fade-up" data-aos-delay={350} data-aos-once="true">
                  For the First time in India in the year 1892 a German Scientist
                  Dr. J. H. C. Shulten started Testing services. This was succeeded
                  by an English Scientist Richard Victor, M. J. H. Barlett
                  (Australian), E. J. Brevleux (Swiss), Mr. A Biswas (Indian).The
                  current Promoters are carrying this rich legacy for more than 125
                  years.
                </p>
                <Link href="/contact" passHref>
                  <a  className="btn btn-secondary mt-15"
                    data-aos="fade-up"
                    data-aos-delay={450}
                    data-aos-once="true">
                    Get in touch
                  </a>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-wedo" id="whatwe">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-once="true"
            >
              <h2 className="title">
                <span>WHAT WE DO</span>
                <br />
                OUR TESTING SERVICES
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-once="true"
            >
              <div
                className="parent-div"
                style={{ backgroundImage: 'url("img/environment.webp")' }}
              >
                <div className="child-div">
                  <h3>ENVIRONMENT</h3>
                  <p>TESTING</p>
                  <Link href="/environment-testing" passHref>
                   <a className="btn btn-secondary">Read More </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={350}
              data-aos-once="true"
            >
              <div
                className="parent-div"
                style={{ backgroundImage: 'url("img/food-testing.webp")' }}
              >
                <div className="child-div">
                  <h3>Food &amp; Agriculture</h3>
                  <p>TESTING</p>
                  <Link href="/food-testing" passHref>
                   <a className="btn btn-secondary">Read More </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={350}
              data-aos-once="true"
            >
              <div
                className="parent-div"
                style={{ backgroundImage: 'url("img/ore-testing2.webp")' }}
              >
                <div className="child-div">
                  <h3>ORES &amp; MINERALS</h3>
                  <p>TESTING</p>
                  <Link href="/ores-minerals-testing" passHref>
                   <a className="btn btn-secondary">Read More </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={350}
              data-aos-once="true"
            >
              <div
                className="parent-div"
                style={{ backgroundImage: 'url("img/water-testing.webp")' }}
              >
                <div className="child-div">
                  <h3>Water</h3>
                  <p>TESTING</p>
                  <Link href="/water-testing" passHref>
                   <a className="btn btn-secondary">Read More </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={350}
              data-aos-once="true"
            >
              <div
                className="parent-div"
                style={{ backgroundImage: 'url("img/soil-testing.webp")' }}
              >
                <div className="child-div">
                  <h3>Soil and Fertilizer </h3>
                  <p>TESTING</p>
                  <Link href="/soil-testing" passHref>
                   <a className="btn btn-secondary">Read More </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={350}
              data-aos-once="true"
            >
              <div
                className="parent-div"
                style={{ backgroundImage: 'url("img/ore-testing.webp")' }}
              >
                <div className="child-div">
                  <h3>Coal </h3>
                  <p>TESTING</p>
                  <Link href="/coal-testing" passHref>
                   <a className="btn btn-secondary">Read More </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;

Home.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Clients />
     <Footer />
   </div>
  )
}
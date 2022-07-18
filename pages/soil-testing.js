import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
//Import Images
import Image from 'next/image'
import SoilImage from "../public/img/soil-img.jpg";

export default function SoilTesting(){
  return(
    <>
    <ParallaxBanner 
        layers={[
          {
            image: 'img/soil-banner.jpg',
            speed: -20,
          },
        ]}
        style={{height: 250 }}
        className="page-banner"
      >
        <div className="container-outer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-text">
                  <h2>Soil and Fertilizer</h2>
                  <ul className="list-inline add-icon">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>Soil and Fertilizer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <div
        className="section food-page"
        style={{ backgroundImage: 'url("img/bg-page.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="basic-padding">
                <h2 className="title2">
                  ND International <br />
                  <span>Soil and Fertilizer</span>
                </h2>
                <p>
                  In this ever increasing demand for Agriculture produce, the need
                  for soil fertility testing is more than ever before. Our
                  Analytical support gives a true knowledge of the quality of soil
                  that a crop is grown. Our testing facilities include the following
                  types of fertilisers.
                </p>
                <p>
                  <b>Nitrogen fertilisers</b> – ammonium Sulphate/Nitrate, urea
                  (granular/prilled) <br />
                  <b>Phosphate fertilisers</b> – DAP, MAP, RP, TSP, SSP
                  <br />
                  <b>Potash fertilisers</b> – MOP, SOP, NOP <br />
                  <b>Compound fertilisers </b> – NPK, NPS
                </p>
                <br />
              </div>
            </div>
            <div className="col-md-5">
              <div className="basic-padding">
                <Image src={SoilImage} className="img-responsive img-rounded" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="title2">Parameters Tested: </h4>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-5">
                  <div className="basic-padding">
                    <ul className="add-icon2 list-unstyled">
                      <li>Nitrogen</li>
                      <li>Phosporous</li>
                      <li>Potassium</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="basic-padding">
                    <ul className="add-icon2 list-unstyled">
                      <li>Nutrients</li>
                      <li>Heavy Metal</li>
                      <li>Pesticide Residue Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

SoilTesting.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}
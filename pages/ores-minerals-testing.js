import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
//Import Images
import Image from 'next/image'
import CoalImage from "../public/img/coal-img.jpg";

export default function OresMineralsTesting(){
  return(
    <>
      <ParallaxBanner 
        layers={[
          {
            image: 'img/coal-banner.jpg',
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
                  <h2>Ores and Minerals</h2>
                  <ul className="list-inline add-icon">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>Ores and Minerals</li>
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
                  <span>Ores and Minerals</span>
                </h2>
                <p>
                  N D International glances ahead to persistently enhance brand
                  value and competence to assure the finest customer service in the
                  domain of ores and minerals. Every client is guaranteed with our
                  analytical reliability so that their products reach the best
                  possible quality. Our testing facilities cater to the following
                  ores
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="basic-padding">
                      <ul className="add-icon2 list-unstyled">
                        <li>Coal and Coke</li>
                        <li>Iron Ores</li>
                        <li>Aluminum Ores</li>
                        <li>Chromite Ores</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="basic-padding">
                      <ul className="add-icon2 list-unstyled">
                        <li>Manganese Ores</li>
                        <li>Ferro Alloys </li>
                        <li>Steel Products </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="col-md-5">
              <div className="basic-padding">
                <Image src={CoalImage} className="img-responsive img-rounded" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-after-before mb-20">
                Services rendered in Ores and Mineral Department:
              </h2>
            </div>
            <div className="col-md-4">
              <div className="basic-padding">
                <ul className="add-icon2 list-unstyled">
                  <li>Sampling as per International Standards – (ISO)</li>
                  <li>Joint Inspection and Independent inspection </li>
                  <li>Weighing supervision</li>
                  <li>Sample Preparation</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="basic-padding">
                <ul className="add-icon2 list-unstyled">
                  <li>Complete Chemical Analysis</li>
                  <li>Load port &amp; Discharge port inspection and Supervision</li>
                  <li> Referee Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

OresMineralsTesting.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
//Import Images
import Image from 'next/image'
import WaterImage from "../public/img/water-img.jpg";


export default function WaterTesting(){
  return(
    <>
      <ParallaxBanner 
        layers={[
          {
            image: 'img/bg-water.jpg',
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
                <h2>Water</h2>
                  <ul className="list-inline add-icon">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>Water</li>
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
                  <span>Water</span>
                </h2>
                <p>
                  Water is a quintessential of all forms of existence. N D
                  International glances ahead to persistently enhancing brand value
                  and competence to assure the finest customer service in different
                  type and sources of industrial and domestic water including
                  effluent/sewage water. Every client is guaranteed with our
                  analytical reliability so that their products reach the best
                  possible quality. Our services include the following parameters
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="basic-padding">
                <Image src={WaterImage} className="img-responsive img-rounded"
                />
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-md-3">
              <div className="box">
                <p>
                  MICROBIOLOGICAL <br /> PARAMETERS{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>
                  PHYSICAL <br /> PARAMETERS{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>TOTAL HARDNESS </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>IRON</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>CHLORIDE </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>
                  RESIDUAL FREE <br /> CHLORINE{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>
                  TOTAL DISSOLVED <br /> SOLIDS{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>
                  CALCIUM, MAGNESIUM, <br /> COPPER, MANGANESE{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>
                  MERCURY, CADMIUM, <br /> SELENIUM, ARSENIC{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>
                  LEAD, ZINC, <br /> CHROMIUM, ALUMINIUM{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>
                  SULPHATE, NITRATE, <br /> FLUORIDE, PHENOL
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>MINERAL OIL </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>ALKALINITY (AS CACO3) </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>PHORATE</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>ALACHLOR</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>ATRAZINE</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>ALDRIN /DIELDRIN </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>ALPHA HCH</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>BETA HCH</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>BUTACHLOR</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>CHLORPYRIPHOS</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>DELTA HCH</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>2,4-DICHLOROPHENOXYACETIC ACID </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>DDT (O,P AND P,P - ISOMERS OF DDT, DDE AND DDD)</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>ENDOSULFAN (ALPHA,BETA AND SULPHATE) </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>ETHION </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>GAMMA - HCH (LINDANE) </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>MALATHION </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>METHYL PARATHIN </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>MONOCROTOPHOS </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <p>OTHER SPECIALISED TESTS </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}


WaterTesting.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
import Link from "next/link";  
//Import Images
import Image from 'next/image'
import CoalImage2 from "../public/img/coal-img2.jpg";
import BestSeller from "../public/img/best-seller.svg";
import Award from "../public/img/award.svg";


export default function CoalTesting(){
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
                  <h2>Coal</h2>
                  <ul className="list-inline add-icon">
                    <li>
                      <Link href="/" passHref>
                        <a>Home</a>
                      </Link>
                      
                    </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>Coal</li>
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
                  <span>Coal Testing</span>
                </h2>
                <p>
                  Our Coal Testing Department has following Accreditations and
                  Recognitions. Registered with Central Electricity Authority,
                  Registered with Coal India.
                </p>
                <div className="row mt-20">
                  {/* <div class="col-md-4">
                    <div class="media parameters">
                      <img src="img/recommended.svg">
                      <h4>Quality Parameters</h4>
                    </div>
                  </div> */}
                  <div className="col-md-6">
                    <div className="media parameters">
                      <Image src={BestSeller} alt="coal" />
                      <h4>Registered with Central Electricity Authority </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media parameters">
                    <Image src={Award} alt="coal" />
                      <h4>Registered with Coal India. </h4>
                    </div>
                  </div>
                </div>
                <br />
                <p>
                  We have good track record doing coal testing work for number of
                  large power plants in India. Our accurate results have been much
                  appreciated by our clients. Also apart from power plants we carry
                  out coal analysis for cargo and vessel borne coal.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="basic-padding">
                <Image src={CoalImage2} className="img-responsive img-rounded" alt="coal"
                />
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-md-12">
              <h2 className="title-after-before mb-30">
                Following are the parameters tested in Coal &amp; Coke{" "}
              </h2>
            </div>
            <div className="col-md-3">
              <div className="basic-padding">
                <ul className="add-icon2 list-unstyled">
                  <li>Proximate analysis</li>
                  <li>Ultimate analysis</li>
                  <li>Calorific value</li>
                  <li>Ash composition &amp; fusion temperature</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="basic-padding">
                <ul className="add-icon2 list-unstyled">
                  <li>Trace elements</li>
                  <li>Coking tests</li>
                  <li>Phosphorous, chlorine, fluorine </li>
                  <li>Petrographic analysis</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="basic-padding">
                <ul className="add-icon2 list-unstyled">
                  <li>Hardgrove Grindability Index</li>
                  <li>Spontaneous combustion determination</li>
                  <li>PSD analysis</li>
                  <li>Crucible swelling number / Free Swelling and many more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .parameters h4 {
          font-size: 16px;
          line-height: 1.4;
        }
      `}</style>
    </>

  )
}
CoalTesting.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}
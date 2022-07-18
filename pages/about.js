import Header from "../components/Header";
import Footer from "../components/Footer";
import Clients from "../components/Logos";
import { ParallaxBanner } from 'react-scroll-parallax';
//Import Images
import Image from 'next/image'
import AboutPicture2 from "../public/img/about-picture2.jpg";


function About(){
  return(
    <>
      <ParallaxBanner 
        layers={[
          {
            image: 'img/about-banner.jpg',
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
                  <h2>ABOUT US</h2>
                  <ul className="list-inline add-icon">
                    <li>
                      <a href="index.php">Home</a>
                    </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <div
        className="section about-page"
        style={{ backgroundImage: 'url("img/bg-page.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title2">
                We are committed to provide <br />
                <span>Accurate Inspection and Testing Services</span>
              </h2>
            </div>
            <div className="col-md-7">
              <div className="basic-padding">
                <p>
                  <b>N.D. International</b> is a multinational organisation located
                  in India and Japan. Our ultramodern laboratory is{" "}
                  <span>accreditated by NABL, ISO 9001:2015 Certified</span> and
                  recognised by other governmental departments. We committed to
                  provide <span>accurate inspection and Testing services.</span>
                </p>
                <p>
                  For the First time in India in the year 1892 a German Scientist
                  Dr. J. H. C. Shulten started Testing services. This was succeeded
                  by an English Scientist Richard Victor, M. J. H. Barlett
                  (Australian), E. J. Brevleux (Swiss), Mr. A Biswas (Indian).The
                  current Promoters are carrying this more than{" "}
                  <span>125 years rich legacy.</span>
                </p>
                <p>
                  N D International is spear heading in both microbiological and
                  chemical analysis domain by becoming indispensable to their
                  clients. We are commited to provide{" "}
                  <span>high quality testing services</span> to all our clients.
                </p>
                <p>
                  N D International glances ahead to persistently enhancing brand
                  value and competence to assure the finest customer service in
                  different type and sources of industrial and domestic water and
                  effluent/sewage water. Every client is guaranteed with our
                  analytical reliability so that their products reach the best
                  possible quality.
                </p>
              </div>
              <div className="row mt-40">
                <div className="col-md-4">
                  <div className="basic-padding counter">
                    <h3>Over Million +</h3>
                    <h4>Certificates Issued</h4>
                    <div className="line" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="basic-padding counter">
                    <h3>800+</h3>
                    <h4>Happy Clients</h4>
                    <div className="line" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="basic-padding counter">
                    <h3>125+</h3>
                    <h4>Years Legacy</h4>
                    <div className="line" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="basic-padding">
                <Image src={AboutPicture2} className="img-responsive img-rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;

About.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Clients />
     <Footer />
   </div>
  )
}
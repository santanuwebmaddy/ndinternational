import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
import Link from "next/link";
//Import Images
import Image from 'next/image'
import EnvironmentPic from "../public/img/environment-pic.jpg";
import IndustryEmission from "../public/img/industry-Emission.jpg";

function EnvironmentTesting(){
  return(
    
    <>
      <ParallaxBanner 
        layers={[
          {
            image: 'img/environment-banner.jpg',
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
                  <h2>ENVIRONMENTAL TESTING</h2>
                  <ul className="list-inline add-icon">
                    <li>
                    <Link href="/" passHref>
                          <a>Home</a>
                        </Link>
                    </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>Environmental Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
    <div
      className="section testing-page"
      style={{ backgroundImage: 'url("img/bg-page.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="basic-padding">
              <h2 className="title2">
                ND International <br />
                <span>Environmental Testing Services</span>
              </h2>
              <p>
                Globally saving environment and reducing the effect of climate
                change has taken the front seat of discussion. As per ethical
                business practice all businesses should mandatorily protect the
                environment. This is also a mandate from regulatory authorities to
                conduct the testing of Emission levels at regular intervals.
              </p>
              <p>
                At N.D International we do the following testing in accordance
                with the guidelines laid down by regulatory authorities and as per
                international standards.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="basic-padding">
              <Image src={EnvironmentPic} className="img-responsive img-rounded" alt="env" />
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-md-3">
            <div className="box">
              <p>Ambient Air Quality</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <p>Stack Flue Gas Monitoring</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <p>Indoor Air Quality Monitoring</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <p>Fugitive Air/Work Zone Monitoring </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <p>Heat Stress Study</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <p>Ventilation </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <p>
                Meteorological Data <br /> Generation
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <p>Marine Impact Assessment</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <p>
                Baseline Monitoring for <br /> EIA/EMP
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <a href="water-testing.php">
              <div className="box">
                <p>Waste Water Analysis</p>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="water-testing.php">
              <div className="box">
                <p>Surface Water Analysis</p>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="water-testing.php">
              <div className="box">
                <p>Ground Water Analysis</p>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="water-testing.php">
              <div className="box">
                <p>Packaged Drinking Water Analysis</p>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="water-testing.php">
              <div className="box">
                <p>Drinking Water Analysis</p>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 bigImage">
            <Image src={IndustryEmission} className="img-responsive" alt="env" />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
        .bigImage{
          line-height: 0 !important;
        }
        @media(max-width:767px){
          .section {
            padding-bottom: 0px;
          }
        }
      `}</style>
    </>


  )
}
export default EnvironmentTesting;

EnvironmentTesting.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}
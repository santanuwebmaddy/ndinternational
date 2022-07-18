import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
//Import Images
import Image from 'next/image'
import Map from "../public/img/map.png";


function Contact(){
  return(
    <>
      <ParallaxBanner 
        layers={[
          {
            image: 'img/page-banner.jpg',
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
                  <h2>Contact Us</h2>
                  <ul className="list-inline add-icon">
                    <li>
                      <a href="index.php">Home</a>
                    </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      {/* contact-page */}
      <div
        className="section contact-page"
        style={{ backgroundImage: 'url("img/bg-page.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                <span>CONTACT US</span> <br />
                GET IN TOUCH
              </h2>
            </div>
            <div className="col-md-6">
              <div className="basic-padding">
                <Image src={Map} className="img-responsive" />
              </div>
              <div className="details">
                <img src="img/india-map-red.svg" />
                <span>Headquaters - India</span>
                <p>
                  107 B, Block-F, New Alipore, Kolkata - 700 053, India <br />
                  Phone : +91 9830 654 565, +919830 238 048 <br /> &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; +91 33 4021 6623/24/22{" "}
                </p>
              </div>
              <div className="details">
                <img src="img/japan-map-red.svg" />
                <span>JAPAN</span>
                <p>
                  187-4, 1-Chome shinmei-cho, Tokyo, Japan <br />
                  Phone : +48 9644575{" "}
                </p>
              </div>
              <div className="details">
                <span>Eamil</span>
                <p style={{ marginTop: 0 }}>info@ndinternational.in</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="basic-padding">
                <form>
                  <h2>
                    <span>FILL UP THE FORM</span> <br />
                    QUICK ENQUIRY FORM
                  </h2>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Your Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone Number:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email Address:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Message:</label>
                    <textarea className="form-control" rows={4} defaultValue={""} />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;

Contact.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}
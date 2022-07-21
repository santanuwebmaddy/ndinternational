import Link from "next/link";
//Import Images
import Image from 'next/image'
import IndiaMap from "../public/img/india-map.svg";
import JapanMap from "../public/img/japan-map.svg";

function Footer(){
  return(
    <>
      <div
        className="footer"
        style={{ backgroundImage: 'url("img/bg-footer.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="basic-padding">
                <h2>
                  ND INTERNATIONAL <br /> <span>ISO 9001:2015 Certified</span>
                </h2>
                <p>
                  <span>
                    N.D. International is a multinational organisation located in
                    India and Japan. Our ultramodern laboratory is accreditated by
                    NABL, ISO 9001:2015 Certified and recognised by other
                    governmental departments.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="basic-padding">
                <h2>GET IN TOUCH</h2>
                <ul className="list-inline" style={{ marginBottom: 15 }}>
                  <li>
                    <span className="indianMap">
                    <Image src={IndiaMap} className="flag" alt="India map" />
                    </span>
                  </li>
                  <li>
                    <p>India</p>
                  </li>
                </ul>
                <p style={{ marginBottom: 15 }}>
                  107 B, Block-F, New Alipore,
                  <br />
                  Kolkata - 700 053, India
                  <br />
                  Phone : +91 9830 654 565 <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; +91 9830 238 048
                </p>
                <ul className="list-inline" style={{ marginBottom: 15 }}>
                  <li>
                    <Image src={JapanMap} className="flag" alt="japan map" />
                  </li>
                  <li>
                    <p>JAPAN</p>
                  </li>
                </ul>
                <p>
                  187-4, 1-Chome shinmei-cho, <br />
                  Tokyo, Japan <br />
                  Phone : +48 9644575
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="basic-padding">
                <h2>QUICK LINKS</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/" passHref>
                      <a>HOME</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/food-testing" passHref>
                      <a>Food &amp; Agriculture Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/environment-testing" passHref>
                      <a>Environmental Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ores-minerals-testing" passHref>
                      <a>Ores &amp; Minerals Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/water-testing" passHref>
                      <a>Water Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/soil-testing" passHref>
                      <a>Soil and Fertilizer Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/coal-testing" passHref>
                      <a>Coal Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/other-testing" passHref>
                      <a>Others Testing</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="basic-padding">
                <h2>SOCIAL LINKS</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#" passHref>
                      <a>FACEBOOK</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="#" passHref>
                      <a>TWITTER</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <a>LINKEDIN</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <a>YOUTUBE</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>Copyright 2019 - ND International </p>
            </div>
            <div className="col-md-6">
              <p className="pull-right">
                Website Developed &amp; Maintained by &nbsp;{" "}
                <Link href="https://www.webmaddy.com/" passHref>
                  <a>Webmaddy</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="https://wa.me/916291191479" passHref target="_blank">
       <a>
        <div className="section-whatsapp">
          <i className="fa fa-whatsapp" aria-hidden="true" />
        </div>
      </a>
      </Link>
    </>
  )
}
export default Footer;
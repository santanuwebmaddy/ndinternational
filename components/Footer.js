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
                    <img src="img/india-map.svg" className="flag" />
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
                    <img src="img/japan-map.svg" className="flag" />
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
                    <a href="index.php">HOME</a>
                  </li>
                  <li>
                    <a href="food-testing.php">Food &amp; Agriculture Testing</a>
                  </li>
                  <li>
                    <a href="environment-testing.php">Environmental Testing</a>
                  </li>
                  <li>
                    <a href="ores-minerals-testing.php">
                      Ores &amp; Minerals Testing
                    </a>
                  </li>
                  <li>
                    <a href="water-testing.php">Water Testing</a>
                  </li>
                  <li>
                    <a href="soil-testing.php">Soil and Fertilizer Testing</a>
                  </li>
                  <li>
                    <a href="coal-testing.php">Coal Testing</a>
                  </li>
                  <li>
                    <a href="other-testing.php">Others Testing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="basic-padding">
                <h2>SOCIAL LINKS</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">FACEBOOK</a>
                  </li>
                  <li>
                    <a href="#">TWITTER</a>
                  </li>
                  <li>
                    <a href="#">LINKEDIN</a>
                  </li>
                  <li>
                    <a href="#">YOUTUBE</a>
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
                <a href="https://www.webmaddy.com/"> Webmaddy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a target="_blank" href="https://wa.me/916291191479">
        <div className="section-whatsapp">
          <i className="fa fa-whatsapp" aria-hidden="true" />
        </div>
      </a>
    </>
  )
}
export default Footer;
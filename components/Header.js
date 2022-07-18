import Image from 'next/image'
import Link from 'next/link'
import IndiaFlag from '../public/img/india-flag.svg'
import JapanFlag from '../public/img/japan-flag.svg'
import Logo from '../public/img/logo.jpg'

function Header(){
  return(
    <>
      <div className="prenav hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="social">
                <ul className="list-inline">
                  <li>
                  <Link href="/" passHref>
                    <a><i className="fa fa-facebook" aria-hidden="true" /></a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/" passHref>
                    <a><i className="fa fa-twitter" aria-hidden="true" /></a>
                  </Link>
                  </li>
                  <li>
                    <Link href="/" passHref>
                      <a><i className="fa fa-linkedin" aria-hidden="true" /></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" passHref>
                      <a><i className="fa fa-youtube-play" aria-hidden="true" /></a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact">
                <ul className="list-inline pull-right" style={{ paddingRight: 10 }}>
                  <li>
                    <Link href="tel:+919830654 565" passHref>
                      <a>
                        <Image src={IndiaFlag} />
                        <span>+91 9830 654 565</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+489874321" passHref>
                      <a>
                        <Image src={JapanFlag} />
                        <span>+48 9874 321</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-default main-nav">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link href="/" passHref>
              <a className="navbar-brand">
                <span className="img-responsive">
                  <Image priority src={Logo} />
                </span>
              </a>
            </Link>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link href='/' passHref>
                <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/about' passHref>
                <a>About Us</a>
                </Link>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href='/food-testing' passHref>
                      <a>Food &amp; Agriculture Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/environment-testing' passHref>
                      <a>Environmental Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/ores-minerals-testing' passHref>
                      <a>Ores &amp; Minerals Testing</a>
                    </Link>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Water Testing <span className="caret" />
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <Link href='/water-testing' passHref>
                          <a>Drinking Water</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/water-testing' passHref>
                          <a>Efflutent Water</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href='/soil-testing' passHref>
                      <a>Soil and Fertilizer Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/coal-testing' passHref>
                      <a>Coal Testing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/other-testing' passHref>
                      <a>Others Testing</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/inspection-services' passHref>
                <a>Inspection services</a>
                </Link>
              </li>
              <li>
                <Link href='/contact' passHref>
                <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header;


{/* <Link href="/" passHref>
  <a></a>
</Link> */}
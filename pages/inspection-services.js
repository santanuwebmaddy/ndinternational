import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
import Link from 'next/link'
//Import Images
import Image from 'next/image'
import CoalTest from "../public/img/coal-test.jpg";

function InspectionServices(){
  return(
    <div>
      <ParallaxBanner 
        layers={[
          {
            image: 'img/inspection-banner.jpg',
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
                  <h2>Inspection services</h2>
                  <ul className="list-inline add-icon">
                     <li>
                     <Link href="/" passHref>
                      <a>Home</a>
                      </Link>
                     </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>Inspection services</li>
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
                  <span>Inspection services</span>
                </h2>
                <p>
                  ND International`&apos;`s inspection service has earned repute of being
                  an ethical concern where both buyer and seller can trust to
                  provide transparent and unbiased support. We have earned the
                  repute of giving an impartial and accurate report of quality
                  control. Our round the clock well trained and experienced field
                  officers at the mine sites, loading ports and at the discharge
                  ports work tirelessly to provide best possible services adding to
                  our customer`&apos;`s delight.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="basic-padding">
                <Image src={CoalTest} className="img-responsive img-rounded" alt="coal"
                />
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-md-12">
              <h2 className="title-after-before mb-30">
                Some of our Inspection Commodities we cover are
              </h2>
            </div>
            <div className="col-md-2">
              <div className="basic-padding">
                <ul className="add-icon2 list-unstyled">
                  <li>Coal ore</li>
                  <li>Iron ore</li>
                  <li>Manganese ore</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="basic-padding">
                <ul className="add-icon2 list-unstyled">
                  <li>Chromium ore</li>
                  <li>Limestone ore</li>
                  <li>Dolomite ore</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="basic-padding">
                <ul className="add-icon2 list-unstyled">
                  <li>Bauxite ore</li>
                  <li>Textiles</li>
                  <li>Food</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}
export default InspectionServices

InspectionServices.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}


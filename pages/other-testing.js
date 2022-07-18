import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
//Import Images
import Image from 'next/image'
import OtherImage from "../public/img/other-img.jpg";


export default function OtherTesting(){
  return(
    <div>
      <>
        <ParallaxBanner 
          layers={[
            {
              image: 'img/other-banner.jpg',
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
                    <h2>Others Testing</h2>
                    <ul className="list-inline add-icon">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                      <li>Others Testing</li>
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
                    <span>Others Testing</span>
                  </h2>
                  <br />
                  <h3 className="title2">Transformer Oil</h3>
                  <p>
                    Transformer oil is vital in the cooling process of a transformer.
                    Chemical contamination, Electrical and thermal stress can reduce
                    component life and cause failure. We provide you the entire gament
                    of transformer testing requirement including the following.{" "}
                  </p>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="basic-padding">
                        <ul className="add-icon2 list-unstyled">
                          <li>Dielectric breakdown </li>
                          <li>Moisture analysis </li>
                          <li>Acidity</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="basic-padding">
                        <ul className="add-icon2 list-unstyled">
                          <li>Tan Delta </li>
                          <li>Dissolved gas analysis</li>
                          <li>Density </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="basic-padding">
                        <ul className="add-icon2 list-unstyled">
                          <li>Viscosity </li>
                          <li>Flash point </li>
                          <li>Pour point etc</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="basic-padding">
                  <Image src={OtherImage}  className="img-responsive img-rounded"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-8">
                <h3 className="title2">Shellac / Seed-lac </h3>
                <p>
                  Shellac is a resin secreted by the female lac bug, on trees in the
                  forests of India and Thailand.Shellac is a natural bioadhesive
                  polymer and is chemically similar to synthetic polymers, and thus
                  can be considered a natural form of plastic.{" "}
                </p>
                <div className="row">
                  <div className="col-md-12 mb-10">
                    <h4>The following are the test we do</h4>
                  </div>
                  <div className="col-md-4">
                    <div className="basic-padding">
                      <ul className="add-icon2 list-unstyled">
                        <li>Colour Index</li>
                        <li>Appearence</li>
                        <li>Acid Value</li>
                        <li>Ash Content </li>
                        <li>Insolubility in hot alcohol</li>
                        <li>Melting Point</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="basic-padding">
                      <ul className="add-icon2 list-unstyled">
                        <li>Moisture</li>
                        <li>Saponification Value</li>
                        <li>Wax Content</li>
                        <li>Rosin</li>
                        <li>Ester Value</li>
                        <li>Heavy Metals </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="basic-padding">
                      <ul className="add-icon2 list-unstyled">
                        <li>Iron</li>
                        <li>Total Plate Count/gm</li>
                        <li>Mould/gm</li>
                        <li>Yeast/gm</li>
                        <li>Flow</li>
                        <li>Polymerization time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-8">
                <h3 className="title2">Cosmetics/ Hosehold and Personal Care </h3>
                <div className="row">
                  <div className="col-md-12 mb-10">
                    <h4>We do the following analysis : </h4>
                  </div>
                  <div className="col-md-4">
                    <div className="basic-padding">
                      <ul className="add-icon2 list-unstyled">
                        <li>Chemical Testing </li>
                        <li>Physical Characteristics </li>
                        <li>Microbiological Parameters </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="basic-padding">
                      <ul className="add-icon2 list-unstyled">
                        <li>Migration Testing </li>
                        <li>Efficacy Testing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

OtherTesting.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}
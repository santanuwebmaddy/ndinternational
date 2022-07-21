import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParallaxBanner } from 'react-scroll-parallax';
import Link from "next/link";
//Import Images
import Image from 'next/image'
import Foodimg from "../public/img/food-img.jpg";
import Recommended from "../public/img/recommended.svg";
import SecureShield from "../public/img/secure-shield.svg";
import HealthyFood from "../public/img/healthy-food.svg";



function FoodTesting(){
  return(
    <>
    <ParallaxBanner 
        layers={[
          {
            image: 'img/food-banner.jpg',
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
                  <h2>Food &amp; Agriculture</h2>
                  <ul className="list-inline add-icon">
                    <li>
                      <Link href="/" passHref>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li style={{ paddingRight: 0, paddingLeft: 0 }}>/</li>
                    <li>Food &amp; Agriculture</li>
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
                  <span>Food &amp; Agriculture</span>
                </h2>
                <p>
                  N.D International caters to the food industry and manufacturers to
                  ensure that at every stage of production and supply chain, the
                  food quality is maintained. This ensures that manufacturers are
                  able to identify their exact quality of produce at every
                  production and supply chain. Thus our clients are able to mitigate
                  risk and safeguard their consumers.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="basic-padding">
                <Image src={Foodimg} className="img-responsive img-rounded" alt="food" />
              </div>
            </div>
          </div>
          <div className="row">
            <h2 className="title-after-before mt-40 ">
              Our services include the following tests.{" "}
            </h2>
            <br />
            <div className="col-md-5">
              <div className="media parameters">
                <div className="media-left">
                  <Image src={Recommended} alt="food" />
                </div>
                <div className="media-body">
                  <h4>Quality Parameters</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="basic-padding">
                        <ul className="add-icon2 list-unstyled">
                          <li>Proximate analysis</li>
                          <li>Food additives</li>
                          <li>Food colourants</li>
                          <li>Food preservatives</li>
                          <li>Antioxidants testing</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="basic-padding">
                        <ul className="add-icon2 list-unstyled">
                          <li>Vitamins</li>
                          <li>Minerals</li>
                          <li>Food Packaging</li>
                          <li>Shelf life Analysis </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media parameters">
                <div className="media-left">
                  <span>
                    <Image src={SecureShield } alt="food" />
                  </span>
                </div>
                <div className="media-body">
                  <h4>Safety Parameters</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="basic-padding">
                        <ul className="add-icon2 list-unstyled">
                          <li>Microbiological Parameters</li>
                          <li>Heavy metal analysis</li>
                          <li>Adulterants</li>
                          <li>Antibiotic residues</li>
                          <li>Pesticide residues</li>
                          <li>Insecticide residues</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="basic-padding">
                        <ul className="add-icon2 list-unstyled">
                          <li>Mycotoxins</li>
                          <li>Biotoxins</li>
                          <li>Pharmacologically Active substances</li>
                          <li>Naturally occurring toxic substances</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row mt-40">
            <div className="col-md-12">
              <br />
              <h2 className="title-after-before text-center mb-40">
                Food and Agri Products
              </h2>
            </div>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left media-middle">
                    <Image src={HealthyFood} className="media-object" alt="food" />
                  </div>
                  <div className="media-body">
                    <p>Vegetables</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/turkey.svg" />
                  </div>
                  <div className="media-body">
                    <p>Meat and Meat Products</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/fish.svg" />
                  </div>
                  <div className="media-body">
                    <p>Fish and Fish Products</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/milk.svg" />
                  </div>
                  <div className="media-body">
                    <p>Milk and Milk Products</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/cereal.svg" />
                  </div>
                  <div className="media-body">
                    <p>Cereals</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/oil.svg" />
                  </div>
                  <div className="media-body">
                    <p>Edible Oil</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/pasta.svg" />
                  </div>
                  <div className="media-body">
                    <p>Pasta</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/bakery.svg" />
                  </div>
                  <div className="media-body">
                    <p>Bakery Products</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/cake.svg" />
                  </div>
                  <div className="media-body">
                    <p>Confectionery (sugar and cocoa products)</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/egg.svg" />
                  </div>
                  <div className="media-body">
                    <p>Egg products Ice cream</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/ice-cream.svg" />
                  </div>
                  <div className="media-body">
                    <p>Ice cream</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/supliments.svg" />
                  </div>
                  <div className="media-body">
                    <p>Food Supplements</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/coffee.svg" />
                  </div>
                  <div className="media-body">
                    <p>Coffee and Tea</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/cola.svg" />
                  </div>
                  <div className="media-body">
                    <p>Soft Drinks</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/wine.svg" />
                  </div>
                  <div className="media-body">
                    <p>Wines and Spirits</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/vinegar.svg" />
                  </div>
                  <div className="media-body">
                    <p>Vinegar</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/additives.svg" />
                  </div>
                  <div className="media-body">
                    <p>Food Additives</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left media-middle">
                    <img src="img/food/frozen.svg" />
                  </div>
                  <div className="media-body">
                    <p>Frozen Foods &amp; Canned Foods</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/package.svg" />
                  </div>
                  <div className="media-body">
                    <p>Packaged food</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/honey.svg" />
                  </div>
                  <div className="media-body">
                    <p>Honey and Honey based Products</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/animal.svg" />
                  </div>
                  <div className="media-body">
                    <p>Animal Nutrition Supplement</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="parameters.php">
              <div className="col-md-3">
                <div className="media food-icon">
                  <div className="media-left">
                    <img src="img/food/poultry.svg" />
                  </div>
                  <div className="media-body">
                    <p>Poultry Feed Additives</p>
                  </div>
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </div>
      <style jsx>{`
       .add-icon2 li {
        left: 20px;
      }
      `}</style>
    </>
  )
}
export default FoodTesting;


FoodTesting.getLayout = function getLayout(page) {
  return (
   <div>
     <Header />
     {page}
     <Footer />
   </div>
  )
}


//SLICK
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//END SLICK
//Parallax
import { ParallaxProvider } from 'react-scroll-parallax';


import '../styles/globals.css'
//AOS
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//END AOS


 function MyApp({ Component, pageProps }) {
  //AOS
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  //END AOS

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return(
    <div>
      <ParallaxProvider>
        {getLayout(<Component {...pageProps} />)}
      </ParallaxProvider>
    </div>
  )
}
export default MyApp
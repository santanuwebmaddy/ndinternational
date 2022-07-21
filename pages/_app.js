//SLICK
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'

//END SLICK
//Parallax
import { ParallaxProvider } from 'react-scroll-parallax';
//AOS
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//END AOS
import '../styles/globals.css'
import "../public/css/bootstrap.min.css";
import "../public/css/main.css?v=1.2";

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
        <Head>
          <title>Next JS Common title</title>
          <meta name="description" content="Next JS Common description..." />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </ParallaxProvider>
    </div>
  )
}
export default MyApp
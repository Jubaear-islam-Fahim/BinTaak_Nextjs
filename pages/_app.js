
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/globals.css';
import '../public/assets/css/style.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {

  return <>
    <NextNProgress color='#00AAE9' />
    <Component {...pageProps} />
  </>
}


export default MyApp

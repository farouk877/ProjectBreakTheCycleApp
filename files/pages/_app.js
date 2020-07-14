// import '../node_modules/react-modal-video/scss/modal-video.scss';
// import * as gtag from '../util/gtag';
// import { useEffect } from 'react';
// import Router from 'next/router';
// import NProgress from 'nprogress';
// import getConfig from 'next/config';




// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//     useEffect(() => {
//         const handleRouteChange = (url) => {
//           gtag.pageview(url)
//         }
//         Router.events.on('routeChangeComplete', handleRouteChange)

//         return () => {
//           Router.events.off('routeChangeComplete', handleRouteChange)
   
//         }
//       }, []);
//     return <Component {...pageProps} />
// }


import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import * as gtag from '../util/gtag';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    
  const handleRouteChange = (url) => {
    gtag.pageview(url)
  }
    

    return <Component {...pageProps} />
}
export default MyApp;
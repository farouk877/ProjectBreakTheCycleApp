import '../node_modules/react-modal-video/scss/modal-video.scss';
import * as gtag from './gtag';
import { useEffect } from 'react';
import Router from 'next/router';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const handleRouteChange = (url) => {
          gtag.pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          Router.events.off('routeChangeComplete', handleRouteChange)
        }
      }, []);
    return <Component {...pageProps} />
}
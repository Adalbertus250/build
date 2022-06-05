import "styles/tailwind.css"
import {AppProps} from "next/app";
import Preloader from "components/preloader"

export default function MWApp({Component, pageProps}: AppProps){
    return <Preloader><Component {...pageProps} /></Preloader>
}
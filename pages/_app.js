import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Header />
    <Component {...pageProps} />
    <Slider />
    <Footer />
    </>
  ) 
}

export default MyApp

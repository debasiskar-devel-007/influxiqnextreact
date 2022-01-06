import '../styles/globals.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

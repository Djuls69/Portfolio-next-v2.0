import Head from 'next/head'
import Header from '../layouts/header/Header'
import SocialMedias from '../layouts/socialMedias/SocialMedias'
import ContactRight from '../layouts/contactRight/ContactRight'
import LandingPage from '../layouts/landingPage/LandingPage'
import About from '../layouts/about/About'
import Services from '../layouts/services/Services'
import Portfolio from '../layouts/portfolio/Portfolio'
import Contact from '../layouts/contact/Contact'
import Footer from '../layouts/footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julien Delusseau | Web Développeur</title>
        <meta
          name='description'
          key='description'
          content='Bienvenu sur mon portfolio. Contactez moi pour vous fournir une application ou site web moderne, rapide, et abordable.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://i.imgur.com/Ix7SZvb.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='Julien Delusseau Portfolio' />
        <meta property='og:title' content='Julien Delusseau Portfolio' />
        <meta property='og:url' content='http://www.juliendelusseau.fr' />
        <link rel='canonical' href='http://www.juliendelusseau.fr' />
        <link rel='icon' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Oxygen&family=Roboto&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
          integrity='sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=='
          crossOrigin='anonymous'
        />
      </Head>

      <main>
        <Header />
        <SocialMedias />
        <div className='content'>
          <LandingPage />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
        <ContactRight />
      </main>
    </div>
  )
}

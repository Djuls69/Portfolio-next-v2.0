import Head from 'next/head'
import Header from '../layouts/header/Header'
import SocialMedias from '../layouts/socialMedias/SocialMedias'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julien Delusseau | Web Développeur</title>
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
      </main>
    </div>
  )
}

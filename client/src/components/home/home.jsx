// import React from 'react'
// import { useTranslation } from "react-i18next";

// const Home = () => {
//   const { t } = useTranslation();
//   return (
//     <div>
//       <h1>{t('home.title')}</h1>
//       <p>{t('home.description')}</p>
//     </div>
//   )
// }

// export default Home
import React from 'react'
import { useTranslation, Trans } from 'react-i18next';
const appName = "SuperApp"; // You can set this dynamically


const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>
        <Trans i18nKey="home.title" values={{ appName }}>
          Welcome to <strong>{{ appName }}</strong>
        </Trans>
      </h1>
      <p>{t('home.description', { appName } )}</p>
    </div>
  )
}

export default Home


// {
//   "home": {
//     "title": "Welcome to our website new here with all updates",
//     "description": "This is the home page"
//   },
//   "about": {
//     "title": "About Us",
//     "description": "Learn about our story and mission which is to be make a last mile delivery",
//     "content": "We are a company dedicated to providing innovative solutions for our customers."
//   }
// }



// {
//   "home": {
//     "title": "Bienvenue sur notre site web new here with all updates",
//     "description": "Ceci est la page d'accueil"
//   },
//   "about": {
//     "title": "À propos de nous",
//     "description": "Découvrez notre histoire et notre mission",
//     "content": "Nous sommes une entreprise dédiée à fournir des solutions innovantes pour nos clients."
//   }
// }

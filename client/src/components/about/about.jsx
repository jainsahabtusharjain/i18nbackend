// import React from 'react'
// import { useTranslation, Trans } from 'react-i18next';


// const About = () => {
//   const { t } = useTranslation();
//   return (
//     <div>
//       <h1>{t('about.title')}</h1>
//       <p>{t('about.description')}</p>
//     </div>
//   )
// }

// export default About



import React from 'react'
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const appName = "SuperApp"; // You can set this dynamically

  return (
    <div>
      <h1>
        <Trans i18nKey="about.title" values={{ appName }}>
          About <strong>{{ appName }}</strong>
        </Trans>
      </h1>
      <p>{t('about.description', { appName })}</p>
    </div>
  )
}

export default About
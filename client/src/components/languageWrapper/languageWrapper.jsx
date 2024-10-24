import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../header/header';

const LanguageWrapper = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let lang = urlParams.get('lang') || 'en';

        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }

        if (!urlParams.has('lang')) {
            navigate(`${location.pathname}?lang=${lang}`, { replace: true });
        }
    }, [i18n, navigate, location]);

    return (
        <div>
            <Header />
            <div style={{marginTop: '50px'}}>
                <Outlet />
            </div>
        </div>
    );
};

export default LanguageWrapper;


// import React, { useEffect } from 'react';
// import { useParams, Outlet } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Header from '../header/header'


// const LanguageWrapper = () => {
//     const { lang } = useParams(); // Get the language from the URL
//     const { i18n } = useTranslation(); // Correctly use the hook

//     useEffect(() => {
//         if (lang && i18n.language !== lang) { // Check if the current language is different
//             i18n.changeLanguage(lang); // Change the language
//         }
//     }, [lang, i18n]);

//     return (
//         <div>
//             <Header lang = {lang}/>
//             <div style={{marginTop: '50px'}}>
//                 <Outlet /> {/* Render child routes */}
//             </div>
//         </div>
//     );
// };

// export default LanguageWrapper;


// import React, { useEffect } from 'react';
// import { useParams, Outlet, useSearchParams, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Header from '../header/header'


// const LanguageWrapper = () => {
//     const { lang } = useParams(); // Get the language from the URL
//     const { i18n } = useTranslation(); // Correctly use the hook
//     const [searchParams] = useSearchParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const lang = searchParams.get('lang') || 'en';
//         i18n.changeLanguage(lang);
        
//         // If no lang parameter is present, add it
//         if (!searchParams.has('lang')) {
//             navigate(`?lang=${lang}`, { replace: true });
//         }
//     }, [searchParams, i18n, navigate]);

//     return (
//         <div>
//             <Header lang = {searchParams}/>
//             <div style={{marginTop: '50px'}}>
//                 <Outlet /> {/* Render child routes */}
//             </div>
//         </div>
//     );
// };

// export default LanguageWrapper;



// import React, { useEffect } from 'react';
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Header from '../header/header';

// const LanguageWrapper = () => {
//     const { i18n } = useTranslation();
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         let lang = urlParams.get('lang') || 'en';

//         if (i18n.language !== lang) {
//             i18n.changeLanguage(lang);
//         }

//         if (!urlParams.has('lang')) {
//             navigate(`${location.pathname}?lang=${lang}`, { replace: true });
//         }
//     }, [i18n, navigate, location]);

//     return (
//         <div>
//             <Header />
//             <div style={{marginTop: '50px'}}>
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default LanguageWrapper;


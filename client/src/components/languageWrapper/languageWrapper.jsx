import React, { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const LanguageWrapper = () => {
    const { lang } = useParams(); // Get the language from the URL
    const { i18n } = useTranslation(); // Correctly use the hook

    useEffect(() => {
        if (lang && i18n.language !== lang) { // Check if the current language is different
            i18n.changeLanguage(lang); // Change the language
        }
    }, [lang, i18n]);

    return (
        <div>
            <Outlet /> {/* Render child routes */}
        </div>
    );
};

export default LanguageWrapper;
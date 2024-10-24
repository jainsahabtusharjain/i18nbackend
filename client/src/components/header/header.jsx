// import React from 'react'
// import {Link, useLocation} from 'react-router-dom';

// const Header = () => {
//     const location = useLocation();

//     const switchLanguage = (newLang) => {
//         const searchParams = new URLSearchParams(location.search);
//         searchParams.set('lang', newLang);
//         return `${location.pathname}?${searchParams.toString()}`;
//     }

//     return (
//         <div className='header'>
//             <div className='nav-links'>
//                 <Link to="/?lang=en">Home</Link>
//                 <Link to="/about?lang=en">About</Link>
//             </div>
//             <div className='local-options'>
//                 <Link to={switchLanguage('en')}>EN</Link>
//                 <Link to={switchLanguage('fr')}>FR</Link>
//             </div>
//         </div>
//     )
// }

// export default Header;



import React from 'react'
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const switchLanguage = (newLang) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('lang', newLang);
        return `${location.pathname}?${searchParams.toString()}`;
    }

    return (
        <div className='header'>
            <div className='nav-links'>
                <Link to="/?lang=en">Home</Link>
                <Link to="/about?lang=en">About</Link>
            </div>
            <div className='local-options'>
                <Link to={switchLanguage('en')}>EN</Link>
                <Link to={switchLanguage('fr')}>FR</Link>
            </div>
        </div>
    )
}

export default Header;

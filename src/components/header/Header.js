// // // Navigation.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;


//^^^^^^^^^^^^^^^^ code for linking components to router.

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
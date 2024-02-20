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


//^^^^^^^^^^^^^^^^ example code for linking components to router.

import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../../pages/Testimonials';


function Header() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>
                    <div className='menu-container'>
                        <div className='menu-trigger'>
                            <h1>About Us</h1>
                        </div>
                        <div className='dropdown-menu'>
                            <ul>
                                <DropdownItem text ={"Testimonials"}><Link to='/Testimonials'></Link></DropdownItem>
                               
                            </ul>
                        </div>
                    </div>
                </li>
                <li><Link to='/Work'> Our Work</Link></li>
                <li><Link to='/Contact'>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

function DropdownItem(props){
    return (
        <li className='dropdownItem'>
            <a>{props.text}</a>
        </li>
    );
};

export default Header;
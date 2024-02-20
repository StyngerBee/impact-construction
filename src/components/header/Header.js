
import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css'
import './Header.css';




function Header() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() =>{
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
            setOpen(false);
            };
        };

        document.addEventListener('mousedown',handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li className='menu-container' ref={menuRef}>
                    <btn className='menu-trigger' onClick={() =>{setOpen(!open)}}>
                        About Us
                    </btn>
                    <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                        <ul>
                            <DropdownItem text={<Link to='/Testimonials'>Testimonials</Link>}></DropdownItem>
                            <DropdownItem text={<Link to='/Testimonials'>Testimonials</Link>}></DropdownItem>
                            <DropdownItem text={<Link to='/Testimonials'>Testimonials</Link>}></DropdownItem>
                            <DropdownItem text={<Link to='/Testimonials'>Testimonials</Link>}></DropdownItem>

                        </ul>
                    </div>

                </li>
                <li><Link to='/Work'> Our Work</Link></li>
                <li><Link to='/Contact'>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

function DropdownItem(props) {
    return (
        <li className='dropdownItem'>
            <a>{props.text}</a>
        </li>
    );
};

export default Header;
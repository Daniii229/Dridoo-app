// src/Dropdown.js
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Dropdownitem.css'; // Optional for styling

const Dropdownitem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        // setIsOpen(false); // Close dropdown on item click
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                <ul className='buttonlist'>
                    <li>
                        <span className='Icons'>{props.icon}</span>
                        {selectedItem || props.title}
                    </li>
                    <li><FaAngleDown fontSize={20} /></li>
                </ul> 
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        {props.items.map((item, index) => (
                            <li key={index} onClick={() => handleItemClick()}>
                                <Link to={props.links[index]}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Default props
Dropdownitem.defaultProps = {
    items: [],
    links: [],
    title: 'Select an item',
    icon: null
};

export default Dropdownitem;


// import React, {useState} from 'react'
// import { FaAngleDown } from 'react-icons/fa'
// import '../component/Dropdownitem.css'

// const Dropdownitem = (props) => {
// //    const [isopen, setisopen] = useState(false)
//   const DropdownMEnu = () => {
//        <ul>
//         <li>item1</li>
//        </ul>
//   }
//   return (
//     <div className='Dropdownitem' onClick={DropdownMEnu} >
//      <ul>
//         <li>{props.title}</li>
//         <li><FaAngleDown/></li>
//      </ul>
//     </div>
//   )



   
// }

// export default Dropdownitem
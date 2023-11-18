// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
// import { useApi } from '../Context/Contexts';
// import './vertical.css';

// const Vertical = () => {
//     const { setcoun ,setcat } = useApi();
//     const handleDropdownItemClick = (countryCode) => {
//         // Call the setcoun function with the selected country code
//         setcoun(countryCode);
       
//     };
//     const handleCategoryChange = (cate) => {
//         setcat(cate)
//     }
   
//     return (
//         <div className="sidebar">
//             <Dropdown style={{ marginTop: "20px" }}>
//                 <Dropdown.Toggle variant="danger" id="dropdown-basic"  >
//                     Select Country
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu style={{backgroundColor:"black"}}>
//                     <Dropdown.Item onClick={() => handleDropdownItemClick('us')}>United States</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleDropdownItemClick('gb')}>United Kingdom</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleDropdownItemClick('ca')}>Canada</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleDropdownItemClick('in')}>India</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleDropdownItemClick('au')}>Australia</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleDropdownItemClick('cn')}>China</Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>
//             <Dropdown style={{ marginTop: "20px" }}>
//                 <Dropdown.Toggle variant="danger"  id="dropdown-basic">
//                     Select Category
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu style={{ backgroundColor: "black" }}>
//                     <Dropdown.Item onClick={() => handleCategoryChange('business')}>Business</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCategoryChange('entertainment')}>Entertainment</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCategoryChange('general')}>General</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCategoryChange('health')}>Health</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCategoryChange('science')}>Science</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCategoryChange('sports')}>Sports</Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCategoryChange('technology')}>Technology</Dropdown.Item>
//                 </Dropdown.Menu>
            
//             </Dropdown>

//         </div>
//     );
// };

// export default Vertical;


import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useApi } from '../Context/Contexts';
import './vertical.css';

const Vertical = () => {
    const { setcoun, setcat } = useApi();

    const handleCountryChange = (countryCode) => {
        setcoun(countryCode);
    };

    const handleCategoryChange = (category) => {
        setcat(category);
    };

    return (
        <div className="sidebar">
            <Dropdown className="mb-4">
                <Dropdown.Toggle variant="danger" id="country-dropdown">
                    Select Country
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: '#343a40' }}>
                    <Dropdown.Item onClick={() => handleCountryChange('us')}>United States</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCountryChange('gb')}>United Kingdom</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCountryChange('ca')}>Canada</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCountryChange('in')}>India</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCountryChange('au')}>Australia</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCountryChange('cn')}>China</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle variant="danger" id="category-dropdown">
                    Select Category
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: '#343a40' }}>
                    <Dropdown.Item onClick={() => handleCategoryChange('business')}>Business</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryChange('entertainment')}>Entertainment</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryChange('general')}>General</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryChange('health')}>Health</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryChange('science')}>Science</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryChange('sports')}>Sports</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryChange('technology')}>Technology</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Vertical;


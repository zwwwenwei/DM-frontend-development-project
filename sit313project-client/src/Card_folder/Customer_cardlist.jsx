import React, { useState } from 'react';
import Customer_card from './Customer_card'
import staffList from './Customer_staffList'
import './Card.css'


function Customer_cardList() {
    /*const filteredstaff = staffList.filter((staff) => {
        return staff.name.toLowerCase().includes(props.searchStaff.toLowerCase())
    })
    const [seemore, setseemore] = useState(false);

    const toggleReadMore = () => {
        setseemore(!seemore);
    }*/


    const [visibleItems, setVisibleItems] = useState(3); // Initial number of visible items

    const showAll = () => {
        setVisibleItems(staffList.length); // Set visible items to the length of the staffList
    };
    return (

        <div>
            <div className="row">
                {staffList.slice(0, visibleItems).map((staff) => (
                    <Customer_card
                        key={staff.key}
                        avatar={staff.avatar}
                        name={staff.name}
                        position={staff.position}
                        rating={staff.rating}
                        star={staff.star}
                    />
                ))}
            </div>
            <div className="morecustomer">
            {visibleItems < staffList.length && (
                    <button className="customerbutton" onClick={showAll}>see all customers</button>
                )}
            </div>
        </div>


    );
}


export default Customer_cardList;
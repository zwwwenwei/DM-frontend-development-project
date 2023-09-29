import React, { useState } from 'react'
import Card from './Card'
import staffList from './staffList'
import './Card.css'

    function CardList(props) {
        /*const filteredstaff = staffList.filter((staff) => {
            return staff.name.toLowerCase().includes(props.searchStaff.toLowerCase())
        })*/
        const [visibleItems, setVisibleItems] = useState(3); // Initial number of visible items

        const showAll = () => {
            setVisibleItems(staffList.length); // Set the length of the staffList
        };

        return <div>
            <div className="row">
            {staffList.slice(0, visibleItems).map((staff) =>
                <Card

                    key={staff.key}
                    avatar={staff.avatar}
                    name={staff.name}
                    position={staff.position}
                    rating={staff.rating}
                    star={staff.star}
                />
            )}
            </div>
            <div className="morestaff">
                {visibleItems < staffList.length && (<button className="staffbutton" onClick={showAll}>see more</button>)}
            </div>
        </div>
    }

    export default CardList;
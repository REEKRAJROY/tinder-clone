import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards () {
const [people, setPeople] = useState([
    {
        name: 'Elon Musk',
        url: "https://d1abomko0vm8t1.cloudfront.net/article/images/740x500/dimg/elon_musk_royal_society.jpg",
    },
    {
        name: 'Jeff Bezos',
        url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
    },
    {
        name: 'Anne Hathway',
        url: "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2018/09/12/49230-Untitled%2520design_128.jpg",
    },
    {
        name: 'Rajkummar Rao',
        url: "https://static.toiimg.com/thumb/msid-71066614,width-800,height-600,resizemode-75,imgsize-211329,pt-32,y_pad-40/71066614.jpg",
    },
    {
        name: 'Shraddha Kapoor',
        url: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/25/852308-shraddhakapoor-061519.jpg",
    },
    {
        name: 'Prabhas',
        url: "https://imgk.timesnownews.com/story/Prabhas_5.jpg?tr=w-1200,h-900",
    },
]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: " +nameToDelete);
}

const outOfFrame = (name) => {
    console.log(name + " left the screen!");
}

    return ( 
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
        {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={("up", "down")}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div 
                    style={{ backgroundImage: `url(${person.url})`}}
                    className = "card"
                    >
                        <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
    );
}

export default TinderCards;

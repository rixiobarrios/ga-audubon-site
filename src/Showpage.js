import React from 'react';
import './Showpage.css';

function Showpage(props) {
    console.log('individual bird here');
    return (
        <div>
            <p>
                <img src={props.bird.image} alt={props.bird.name} />
            </p>
            <p>{props.bird.name}</p>
            <p>{props.bird.genus}</p>
            <p>{props.bird.conservationStatus}</p>
            <button class="button">
                <a href={props.bird.homepage}>Read More</a>
            </button>
        </div>
    );
}

export default Showpage;

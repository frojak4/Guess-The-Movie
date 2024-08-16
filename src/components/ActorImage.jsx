import React from 'react';


const ActorImage = ({image, name}) => {

    const imagelink = `https://image.tmdb.org/t/p/original${image}`

    return(
        <div className="actor">
            <img src={imagelink} alt="actor"/>
            <h3>{name}</h3>
        </div>
    )
}

export default ActorImage;
import React from "react";
import "./MovieCard.css"

function MovieCard(item) {
    console.log(item.item.show)
    var src = "https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg"
    var rating = "Not rated"
    if(item.item.show.image)
    src=item.item.show.image.medium
    if(item.item.show.rating.average)
    rating = item.item.show.rating.average
    
    return(
        <div>
        <p id="cardBlock">{item.item.show.name}</p>
        <div id="movieCard">
        <img src={src} alt={item.item.show.name} />
        <p id="score" > Score: {item.item.score} <br/>Rating : {rating}</p>
        </div>
        </div>
    )
}

export default MovieCard;
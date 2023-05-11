import React from "react";
import "./MovieCard.css"
import { useNavigate } from "react-router-dom";

function MovieCard(item) {
    const navHandler = useNavigate();
    console.log(item.item.show)
    var src = "https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg"
    var rating = "Not rated"
    if(item.item.show.image)
    src=item.item.show.image.medium
    if(item.item.show.rating.average)
    rating = item.item.show.rating.average

    return(
        <div className="card">
        <p className="cardBlock">{item.item.show.name}</p>
        <div className="back">
        <div>
        <span>Type : </span>
        <span>{item.item.show.type}</span>
        </div>
        <div>
        <span>Language : </span>
        <span>{item.item.show.language}</span>
        </div>
        <div>
        <span>Genres : </span>
        <span>{item.item.show.genres}</span>
        </div>
        <div>
        <span>Status : </span>
        <span>{item.item.show.status}</span>
        </div>
        <div>
        <span>Runtime : </span>
        <span>{item.item.show.runtime}</span>
        </div>
        <div>
        <span>Average Runtime : </span>
        <span>{item.item.show.averageRuntime}</span>
        </div>
        <div>
        <span>Premierd : </span>
        <span>{item.item.show.premiered}</span>
        </div>
        <div>
        <span>Ended : </span>
        <span>{item.item.show.ended}</span>
        </div>
        <div>
        <span>Schedule : </span>
        <span>{item.item.show.schedule.time} </span>on
        <span> {item.item.show.schedule.days}</span>
        </div>
        <div className="book" onClick={() => navHandler(`/details`, {state:item.item})}> Book Now </div>
        </div>
        <div className="movieCard">
        <img src={src} alt={item.item.show.name} />
        <p className="score" > Score: {item.item.score} <br/>Rating : {rating}</p>
        </div>
        </div>
    )
}

export default MovieCard;
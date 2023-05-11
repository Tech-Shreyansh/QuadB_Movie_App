import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/navBar";
import "./DetailsPage.css"

function DetailsPage() {

    const navHandler = useNavigate();
    const navigate = useLocation();
    const item = navigate.state
    console.log(item)
    var src = "https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg"
    var rating = "Not rated"
    if(item.show.image)
    src=item.show.image.original
    if(item.show.rating.average)
    rating = item.show.rating.average
    return(
        <div>
        <NavBar />
        <div id="page" >
        <img src={src} alt={item.show.name}  />
        <div id="details" >
        <h3>SUMMARY</h3>
        <div id ="summary" dangerouslySetInnerHTML={{ __html: item.show.summary }} />
        {
            item.show.network?<p className="additionalDetails">
            Country : {item.show.network.country.name}<br/>
            TimeZone : {item.show.network.country.timezone}<br/>
        </p>:<></>
        }
        </div>
        </div>
        <div id="buttons">
        <div className="finalBook">Previous</div>
        <div className="finalBook">Book Ticket</div>
        <div className="finalBook">Next</div>
        </div>
        </div>
    )
}
export default DetailsPage;
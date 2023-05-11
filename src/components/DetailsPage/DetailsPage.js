import React from "react";
import { Navigate, useLocation, useNavigate, useNavigation } from "react-router-dom";
import "./DetailsPage.css"

function DetailsPage() {
    const navigate = useLocation();
    const data = navigate.state
    return(
        <>
        <p className="details">
            {data.score}
        </p>
        </>
    )
}

export default DetailsPage;
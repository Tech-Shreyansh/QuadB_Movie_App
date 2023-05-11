import React, { useState, useEffect } from "react";
import "./HomePage.css"
import MovieCard from "./MovieCard";
import axios from "axios";
import NavBar from "../NavBar/navBar";

function HomePage() {

    const [data, setData] = useState([]);
    useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        console.log(res.data); 
        setData(res.data);
      })
      .catch((err) => {
        console.log("Something went wrong.");
      });
  }, []);

    return(
        <div>
        <NavBar />
        <div id="movieList" >
        {
            data.map((item) => { return <MovieCard item={item} key={item.id} />})
        }
        </div>
        </div>
    )
}

export default HomePage;
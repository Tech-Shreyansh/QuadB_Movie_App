import React from "react";
import "./HomePage.css"
import MovieCard from "./MovieCard";

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
        <div id="movieList" >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        </div>
        </div>
    )
}

export default HomePage;
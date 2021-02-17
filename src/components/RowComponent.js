import React, {useState, useEffect} from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={"row-posters"}>
                {movies.map(movie => (
                    //post all movie posters 
                    <img className= {`row-poster ${isLargeRow && "row-posterLarge"}`}
                    key={movie.id} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}  
            </div>
        </div>
    )
}

export default Row

import React, {useState, useEffect} from 'react'
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer( movie?.name || movie?.title || movie?.original_name || movie?.original_title || "" )
            
            .then(url => {
                const UrlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(UrlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
        // console.log(movie)
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    //post all movie posters 
                    <img title={movie.name || movie.title} className= {`row-poster ${isLargeRow && "row-posterLarge"}`}
                        key={movie.id} 
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                ))}  
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row

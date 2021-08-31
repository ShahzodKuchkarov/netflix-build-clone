import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import requests from './Request';
import Loader from './components/Loader';
import { useDispatch } from 'react-redux';
import { saveMovie } from './store/actions';
import { useHistory } from 'react-router-dom';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    const handleId = (movie) => {
        dispatch(saveMovie(movie));
        history.push(`/movie/${movie.id}`)
    };

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                setLoading(false)
                return requests;
            }
            catch {
                setLoading(false)
            }

        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);

    return (
        <div className="row">
            <Loader
                loading={loading}
            />
            <h2>{title}</h2>
            <div className="row__posters">

                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                onClick={() => handleId(movie)}
                                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`}
                                alt={movie.name} />
                        )
                    /*   (<span className="row__posters__titles">
                          {movie?.name || movie?.original_name || movie?.title}
                      </span>
                      ) */
                )}
            </div>

        </div>
    )
}

export default Row

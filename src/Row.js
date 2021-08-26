import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import requests from './Request';
import Loader from './components/Loader'

function Row({ title, fetchUrl, isLargeRow = false }) {

    const [loading, setLoading] = useState(false);

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"

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
                                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`}
                                alt={movie.name}
                            />
                        ))}
            </div>

        </div>
    )
}

export default Row

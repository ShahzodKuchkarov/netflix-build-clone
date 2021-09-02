import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './MoiveScreen.css';
import Nav from '../Nav';
import { AiOutlineUnorderedList, FaHeart, BsFillBookmarkFill, AiFillStar, BsFillPlayFill } from 'react-icons/all';
import ModalVideo from 'react-modal-video';
import { Main } from './MovieScreenStyle';

function MovieScreen() {

    const [isOpen, setOpen] = useState(false);

    const [state, setState] = useState({
        like: false,
        mark: false,
        star: false
    });

    const movie = useSelector((state) => state.user.movie);

    console.log(movie);

    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <div style={{
            backgroundImage: `linear-gradient( rgba(7.06%, 7.45%, 4.71%, 1.00), rgba(7.06%, 7.45%, 4.71%, 0.80)), url(${base_url}${movie.backdrop_path}) `,
            height: '100vh'
        }} className="movieScreen">

            <Nav />

            <div className="movieScreen__img">
                <img src={`${base_url}${movie.poster_path}`} alt="" />
            </div>
            <div className="movieScreen__details">
                <h1 >{movie.name}</h1>
                <div className="movieScreen__details__icons">
                    <span>Rate: {movie.vote_average}</span>

                    <div className="movieScreen__details__icons__item">
                        <AiOutlineUnorderedList />
                    </div>
                    <div onClick={() => setState((state) => ({ ...state, like: !state.like }))} className="movieScreen__details__icons__item">
                        <FaHeart color={state.like ? 'red' : 'white'} />
                    </div>
                    <div onClick={() => setState((state) => ({ ...state, mark: !state.mark }))} className="movieScreen__details__icons__item">
                        <BsFillBookmarkFill color={state.mark ? 'yellow' : 'white'} />
                    </div>
                    <div onClick={() => setState((state) => ({ ...state, star: !state.star }))} className="movieScreen__details__icons__item">
                        <AiFillStar color={state.star ? 'purple' : 'white'} />
                    </div>
                    <div onClick={() => setOpen(true)} className="movieScreen__details__icons__play">
                        <BsFillPlayFill /> <span>Play Trailer</span>
                    </div>
                </div>
                <h3>Overview</h3>
                <p className="movieScreen__details__overview">{movie.overview}</p>
                {
                    movie.origin_country ?
                        <p className="movieScreen__details__country">
                            <span>Country Origin:</span>
                            <span>{movie.origin_country[0]}</span>
                        </p> :
                        ""
                }

                <p className="movieScreen__details__date">
                    <span>
                        First air date:
                    </span>
                    <span>
                        {movie.first_air_date || movie.release_date}
                    </span>
                </p>

            </div>

            <Main>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="F8MN0o6RS9o" onClose={() => setOpen(false)} />
            </Main>


        </div >
    )
}

export default MovieScreen

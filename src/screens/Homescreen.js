import React from 'react';
import Banner from '../Banner';
import './Homescreen';
import Nav from '../Nav';
import requests from '../Request';
import Row from '../Row';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Homescreen() {
    Aos.init({
        duration: 3000,
        delay: 1
    })



    console.log(requests.fetchActionMovies)
    return (
        <div className="Homescreen" style={{
            backgroundColor: '#111'
        }}>
            <Nav />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <div data-aos="fade-up">
                <Row
                    title='Trending now'
                    fetchUrl={requests.fetchTrending}
                />
            </div>
            <div data-aos="fade-up">
                <Row
                    title='Top Rated'
                    fetchUrl={requests.fetchTopRated}
                />
            </div>
            <div data-aos="fade-up">
                <Row
                    title='Action Movies'
                    fetchUrl={requests.fetchActionMovies}
                />
            </div>
            <div data-aos="fade-up">
                <Row
                    title='Comedy Movies'
                    fetchUrl={requests.fetchComedyMovies}
                />
            </div>
            <div data-aos="fade-up">
                <Row
                    title='Horror Movies'
                    fetchUrl={requests.fetchHorrorMovies}
                />
            </div>
            <div data-aos="fade-up">
                <Row
                    title='Romance Movies'
                    fetchUrl={requests.fetchRomanceMovies}
                />
            </div>
            <div data-aos="fade-bottom">
                <Row
                    title='Documentaries'
                    fetchUrl={requests.fetchDocumentaries}
                />
            </div>


        </div>
    )
}

export default Homescreen

import React from 'react'
import Banner from '../Banner'
import './Homescreen'
import Nav from '../Nav'
import requests from '../Request'
import Row from '../Row'

function Homescreen() {

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
            <Row
                title='Trending now'
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />

        </div>
    )
}

export default Homescreen

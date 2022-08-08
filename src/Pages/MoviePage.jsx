import React, { useEffect, useState } from "react"
import ListHeading from "../components/ListHeading"
import MovieList from "../components/MovieList"
import Searchbox from "../components/Searchbox"

const MoviePage = () => {

    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('');

    const getMovies = async () => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9b07284e`
        const response = await fetch(url);
        const resjson = await response.json();
      
		if (resjson.Search) {
			setMovies(resjson.Search);
		}
    }



    useEffect(() => {
        getMovies()
    }, [])



    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
				<ListHeading Heading='Movies' />
				<Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
            <div className='row'>
                <MovieList Movies={movies} />
            </div>
        </div>
    )
}
export default MoviePage;
import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import AllRoutes from './AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbox from './components/Searchbox';
import ListHeading from './components/ListHeading';
import MovieList from './components/MovieList';
import AddToFavourites from './components/AddToFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {

  const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('Batman');
    const [favourites, setFavourites] = useState([]);

    const getMovies = async () => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9b07284e`
        const response = await fetch(url);
        const resjson = await response.json();
      

			setMovies(resjson.Search);
		
    }

    useEffect(() => {
        getMovies()
    }, [searchValue])



    // useEffect(() => {
    //   const movieFavourites = JSON.parse(
    //     localStorage.getItem('react-movie-app-favourites')
    //   );
    //   setFavourites(movieFavourites);
    // }, []);

    // console.log(favourites);

    useEffect(() => {
      const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'))
      setFavourites(movieFavourites)
    })

    const saveToLocalStorage = (items) => {
      localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };




    const handleFavouritesClick = (movie) => {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList)
    };

    

    const handleRemoveFavouriteClick = (movie) => {
      const newFavouriteList = favourites.filter(
        (favourite) => favourite.imdbID !== movie.imdbID
      );
  
      setFavourites(newFavouriteList);
    };


  
  return (
    <div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
        <ListHeading Heading='Movies' />
        <Searchbox value={ searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList Movies={movies && movies} FavouriteComponent={AddToFavourites && AddToFavourites} handleFavouritesClick={handleFavouritesClick}/>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<ListHeading Heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList Movies={favourites} FavouriteComponent={RemoveFavourites} handleFavouritesClick={handleRemoveFavouriteClick}/>
			</div>
    </div>
  );
}

export default App;



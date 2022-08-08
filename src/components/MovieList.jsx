import React from "react"

const MovieList = ({ Movies, FavouriteComponent,handleFavouritesClick }) => {

    return (
        <>
            {
                Movies && Object.keys(Movies).map((data, key) => {
                    return (
                        <div key={key} className='image-container d-flex justify-content-start m-3' style={{ width: "auto" }}>
                            <img src={Movies[data].Poster} alt='movie'></img>
                            <div onClick={() => handleFavouritesClick(Movies[data])} className='overlay d-flex align-items-center justify-content-center'>
                                <FavouriteComponent />
                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}
export default MovieList;
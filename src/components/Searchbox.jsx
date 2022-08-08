import React from"react"

const Searchbox = ({value, setSearchValue}) => {
    return(
        <div className='col col-sm-4'>
			<input
				className='form-control'
				value={value}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
    )
}

export default Searchbox;
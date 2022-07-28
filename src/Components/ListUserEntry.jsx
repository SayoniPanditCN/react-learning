import React from 'react'
import moment from 'moment';

const ListUserEntry = ({ data,handleEdit, handleDelete}) => {

  
    return (
        <div >
            <div className='ListUserEntry' >
                <div className='Element'>{data.First_Name} {data.Last_Name}</div>
                <div className='Element'>{data.Email}</div>
                <div className='Element'>{data.Address}</div>
                <div className='Element'>{data.Gender}</div>
                <div className='Element'>{moment(data.Date_of_birth).format("Do MMMM YYYY")}</div>
                <div className='Element'>{data.Highest_Qualification}</div>
                <div className='Element'>{data.CV}</div>
                <div className='Element'>{data.User_Image}</div>
                <div className='Element'>
                    <button onClick={() => handleEdit(data)}>Edit</button>
                    <button onClick={() => handleDelete(data.id)}>Delete</button>
                </div>
                
            </div>
       
        </div>
    )
}

export default ListUserEntry;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Booke from './Book';


const BookDetail = () => {
    const {id}=useParams();

    const [book,setbook]=useState();
    const getBookData=async()=>{
        const apiURL=`https://www.googleapis.com/books/v1/volumes/${id}`
    
            const data=await axios.get(apiURL)

           
            setbook(data.data);
            console.log(data.data.volumeInfo.title,"&&&&&&&&&");
           
            let email=JSON.parse(localStorage.getItem('userInfo')).email;
            
            await axios.post(
              `https://task-back12.herokuapp.com/create/${email}/${data.data.volumeInfo.title}`,
             
              {
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                }
              }
            )
           
            
            
        }
        useEffect(()=>{
         
            getBookData();
        },[]);
        // getBookData();
  return (
    <div>
    {book && (<div><Booke book={book}/></div>)}

    </div>
    





  )
}

export default BookDetail
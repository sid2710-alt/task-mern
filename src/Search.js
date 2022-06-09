import axios from 'axios';
import { getAuth, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
const auth=getAuth();

const Search = () => {
  {console.log("Search")}
    const [searchQuery,setSearchQuery]=useState("");
    const [apidata,setApidata]=useState();
    const [showlogin,setshowlogin]=useState(localStorage.getItem("userInfo")?1:0);
    const apiKey='AIzaSyBU0rIs6BgTzgfVHe_jYVHlq4AQPBb0DXY'
    const getBooksData=async(searchQuery)=>{
    const apiURL=`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}:keyes&key=${apiKey}`

        const data=await axios.get(apiURL)
        console.log(data.data.items)
        setApidata(data.data.items);
    }
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('userInfo')){
            navigate("/login")
        }
    })
    useEffect(()=>{
        console.log(searchQuery);
        if(searchQuery.length>2)
        getBooksData(searchQuery);
        else{
            setApidata([])
            return ;
        }
        
        

    },[searchQuery.length])

    const {id}=useParams();
    const signOutWithGoogle=()=>{
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log("SignOut")
          localStorage.removeItem("userInfo")
          navigate("/login")
        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
    }
    let email=JSON.parse(localStorage.getItem('userInfo')).email;
   
   return (
    <div>
    
        <input type="search" placeholder="Search Book...." value={searchQuery
        } onChange={(e)=>setSearchQuery(e.target.value)}/>
        <button onClick={signOutWithGoogle}>Logout</button>
        
        <Link to={`/history/${email}`}>Show history </Link>
        <div className='displayGrid'>

        
        {
            apidata?.map((books,key)=>{
                return(
                    <div className="">
                    {/* <h1>{books.volumeInf
                    {conslo.title}</h1>
                    
                     */}
                     {console.log(books.accessInfo)}
                     
                     <div class="card"  >
                     <Link to={`/search/${books.id}`}>
  <img src={books.volumeInfo.imageLinks?.thumbnail?books.volumeInfo.imageLinks.thumbnail:`https://picsum.photos/200/300`} alt="Avatar"/>
  <div class="container">
    <h4><b>{books.volumeInfo.title}</b></h4>
    {/* <p>Architect & Engineer</p> */}
  </div>
  </Link>
</div>

                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Search
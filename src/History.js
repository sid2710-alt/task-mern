import React, { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
const History=()=>{
    const {email}=useParams();
    const [list, setList]=useState([]
    );
    const getList=async()=>{
        const apiURL=`https://task-back12.herokuapp.com/history/${email}`
            const data=await axios.get(apiURL);
            setList(data.data.data);}
      useEffect(()=>{
          getList();
      },[]);  
      console.log(list);
      
return(
    <div>
        
  
  {
  list.map((item)=>
      <h1>{item}</h1>
  )}

    </div>    

)
}
export default History;
// const BookDetail = () => {
//     const {id}=useParams();

//     const [book,setbook]=useState();
//     const getBookData=async()=>{
//         const apiURL=`https://www.googleapis.com/books/v1/volumes/${id}`
    
//             const data=await axios.get(apiURL)

//             console.log(data.data);
//             setbook(data.data);
//             console.log(data.data.volumeInfo.title,"&&&&&&&&&");
//             console.log("hereiam");
//             let email=JSON.parse(localStorage.getItem('userInfo')).email;
            
//             await axios.post(
//               `http://localhost:3000/create/${email}/${data.data.volumeInfo.title}`,
             
//               {
//                 headers: {
//                   "Content-type": "application/json; charset=UTF-8",
//                 }
//               }
//             )
           
            
            
//         }
//         useEffect(()=>{
//           console.log("here");
//             getBookData();
//         },[]);
//         // getBookData();
//   return (
//     <div>
//     {book && (<div><Booke book={book}/></div>)}

//     </div>
    





//   )
// }

// export default BookDetail
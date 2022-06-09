
import './App.css';
import Search from './Search';
import BookDetail from './BookDetail';
import History from './History';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';

import { useEffect } from 'react';

 function App() {
  const navigate=useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     () => JSON.parse(localStorage.getItem('userInfo')) || false
//   );
//   const setAuth = (value) => {
//     setIsAuthenticated(value);
//     //alert(value);
//   };

//   useEffect(()=>{
//     localStorage.setItem("auth", JSON.stringify(isAuthenticated));
//   }, [isAuthenticated]);
useEffect(()=>{
  if(!localStorage.getItem("userInfo")){
    navigate("/login")
  }
})
  
  return (
    <div className="">
      
      {/* <Search/> */}
      <Routes>
        <Route path="/search/:id" element={<BookDetail/>}/>
        <Route path="/search" element={<Search/>}/>
        
        {/* <Route path="/" element={localStorage.getItem('userInfo')
            ? <Search  />
            : <Login/>
          }/> */}
          <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/history/:email" element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;

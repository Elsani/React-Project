 import React from 'react'
 import { Routes, Route, } from 'react-router-dom'
 
  const MainAppPage = () => {
   return ( 
   <Routes>
    {/* <Route path='/' element={<Redirect to="/somewhere/else" /> } /> */}
   <Route path='*' element={<div> No Route Found </div>  } />
   </Routes>
   )
 }

 export default MainAppPage
 
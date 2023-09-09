 import { Routes, Route, Navigate, } from 'react-router-dom'
 import { Users, Products, ToDos } from './'

  const MainAppPage = () => {
   return ( 
   <Routes>
    <Route path='/' element={<Navigate to="/users" /> } />
    <Route path='users' element={<Users />} />
    <Route path='products' element={<Products />} />
    <Route path='todos' element={<ToDos /> } />
   <Route path='*' element={<div> No Route Found </div>  } />
   </Routes>
   )
 }

 export default MainAppPage
 
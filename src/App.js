import {  Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
import FavoriteBlock from "./pages/FavoriteBlock";
import PostPage from "./pages/PostPage";
import Home from './pages/Home';
import  HamburgerButton from './pages/NavBar'; 
function App() {

  //cart
  //разобраться с fetch (с favorites, чтобы подруб/отруб) и подключить mango db  (в конце)
  //поправить визуал в details
  //меню
  //добавить возможность менять цвет фона на ночной

  return (
<div>  
  <HamburgerButton/>

  <Routes>
  <Route  path="*" element={<Home/>}></Route>
  <Route path="details/:id" element={<PostPage/>}></Route>
  <Route  path="/Cart" element={<Cart/>}></Route>
  <Route  path="/FavoriteBlock" element={<FavoriteBlock/>}></Route>
  </Routes>


</div>


  );
}

export default App;





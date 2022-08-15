import {  Routes, Route } from 'react-router-dom';
import Cart from "./cart/Cart";
import PostPage from "./pages/Details";
import Home from './pages/Home';
import  HamburgerButton from './pages/NavBar'; 
import Root from './Root';

function App() {
  //cart
  //разобраться с fetch (с favorites, чтобы подруб/отруб) и подключить mango db  (в конце)
  //поправить визуал в details
  //меню
  //добавить возможность менять цвет фона на ночной

  return (
<div> 
 
  <HamburgerButton/>
  <br/>
  <Root/>
  <Routes>
  <Route  path="*" element={<Home/>}></Route>
  <Route path="details/:id" element={<PostPage/>}></Route>
  <Route  path="/Cart" element={<Cart/>}></Route>
  </Routes>


</div>


  );
}

export default App;





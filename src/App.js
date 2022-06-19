import {  Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import NavBar from "./pages/NavBar";
import Cart from "./pages/Cart";
import FavoriteBlock from "./pages/FavoriteBlock";
import PostPage from "./pages/PostPage";
import { CartProvider } from './pages/context/FavContext';
import SneakersGrid from './pages/SneakersGrid';
function App() {


  //объединить фильтры, они не синхронны 
  //cart
  //разобраться с fetch (с favorites, чтобы подруб/отруб) и подключить mango db  (в конце)
  //поправить визуал в details
  //меню
  
  return (
<div>
  <CartProvider>
<NavBar/>
  <Routes>
  <Route  path="/" element={<Main/>}></Route>
  <Route  path="*" element={<SneakersGrid/>}></Route>
  <Route path="/products/:productId" element={<PostPage/>}></Route>
  <Route  path="/Cart" element={<Cart/>}></Route>
  <Route  path="/FavoriteBlock" element={<FavoriteBlock/>}></Route>
  </Routes>


  </CartProvider>


</div>


  );
}

export default App;





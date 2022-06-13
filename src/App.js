import {  Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Main from "./pages/Main";
import NavBar from "./pages/NavBar";
import Cart from "./pages/Cart";
import FavoriteBlock from "./pages/FavoriteBlock";
import PostPage from "./pages/PostPage";
import { CartProvider } from './pages/context/FavContext';
function App() {


  //объединить фильтры, они не синхронны 
  //настроить like/unlike
  //cart
  
  return (
<div>
  <CartProvider>
<NavBar/>
  <Routes>
  <Route  path="/" element={<Main/>}></Route>
  <Route  path="/home" element={<Home/>}></Route>
  <Route  path="*" element={<Home/>}></Route>
  <Route path="/products/:productId" element={<PostPage/>}></Route>
  <Route  path="/Cart" element={<Cart/>}></Route>
  <Route  path="/FavoriteBlock" element={<FavoriteBlock/>}></Route>
  </Routes>


  </CartProvider>


</div>


  );
}

export default App;





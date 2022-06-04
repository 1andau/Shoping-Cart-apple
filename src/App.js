import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import NavBar from "./pages/NavBar";
import Cart from "./pages/Cart";
import FavoriteBlock from "./pages/FavoriteBlock";
import PostPage from "./pages/PostPage";
function App() {

  return (


<div>
<NavBar/>
  <Routes>
  <Route  path="/" element={<Main/>}></Route>
  <Route  path="/home" element={<Home/>}></Route>
  <Route path='/sneakers/:id' element={<PostPage/>}></Route>
  <Route  path="/Cart" element={<Cart/>}></Route>
  <Route  path="/FavoriteBlock" element={<FavoriteBlock/>}></Route>
  </Routes>

</div>


  );
}

export default App;





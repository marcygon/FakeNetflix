import './Styles/Main.css'
import { Route, Routes } from "react-router";
import PagePrincipal from "./pages/PagePrincipal";
import MovieDetails from './pages/MovieDetails';
import CategoryMovies from './pages/CategoryMovies';


function App() {
  return (
      <Routes>
        <Route path="/" element={<PagePrincipal/>}/>
        <Route path='/details/:id' element={<MovieDetails/>}/>
        <Route path='/category-movies/:id' element={<CategoryMovies/>}/>
      </Routes>
  );
}

export default App;

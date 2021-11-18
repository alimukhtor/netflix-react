
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import TvShows from './components/TvShows'
import NotFound from './components/NotFound'
import MovieDetails from './components/MovieDetails'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App =()=> {
  return(
    <div className="App">
         <BrowserRouter>
         	 <Routes>
             <Route path="/home" element={<HomePage />} />
             <Route path="/tv-shows" element={<TvShows />} />
             <Route path="*" element={<NotFound />} />
             <Route path="/movieDetails/:movieID" element={<MovieDetails />} />

           </Routes>
         </BrowserRouter>
       </div> 
     )
}

export default App;

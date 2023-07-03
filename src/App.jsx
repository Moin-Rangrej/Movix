import { useEffect } from 'react';
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector,useDispatch } from 'react-redux';
import { getApiConfigration } from './features/Homeslice';

// pages
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Details from './pages/details/Details';
import Searchresult from './pages/searchResult/Searchresult';
import Explore from './pages/explore/Explore';
import Pagenotfound from './pages/404/Pagenotfound';
import { Route, Routes } from 'react-router-dom';


function App() {

  const url  = useSelector((state) => state.Moviehome.url)

  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
    .then((res) => {
      // console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfigration(url))
    });
  };

  return (
    <>
    <Header />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:mediaType/:id' element={<Details />}/>
          <Route path='/search/:query' element={<Searchresult />}/>
          <Route path='/explore/:mediaType' element={<Explore />}/>
          <Route path='*' element={<Pagenotfound />}/>
      </Routes>
    <Footer />  
    </>
  )
}

export default App

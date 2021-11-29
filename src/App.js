// import Home from "./pages/About/About";
import {useQuery,gql} from '@apollo/client'
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Description from "./pages/Description/Description";
import Login from "./pages/Login/Login";
import Detail from "./pages/Details/Detail";
import Screen from "./pages/Screen/Screen";
// import { LOAD_MOVIE } from "./components/NowPlaying/NowPlaying";
import Desc from "./components/Desc/Desc";

export const LOAD_MOVIE = gql `
query Movie {
    Movie {
      id
      Cast
      Directors
      Duration
      Genre
      Img
      Producers
      Production
      Rate
      Sinopsis
      Title
      Trailer
      Writer
    }
  }
  
`

function App() {

  const {data} = useQuery(LOAD_MOVIE)
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<Login/>} />
      {/* <Route path="/Description/:id" element={<Description/>} /> */}
      <Route path="/Desc/:id" element={<Desc data={data} />} />
      {/* <Route path="/Desc/:id" element={<Desc/>} /> */}
      <Route path="/Screen" element={<Screen/>} />
      <Route path="/Detail" element={<Detail/>} />
      <Route path="/Movie" element={<Home/>} />
      <Route path="/Upcoming" element={<Home/>} />
      
    </Routes>
    {/* to="halaman/"+id */}
    {/* to={"halaman/"+id} */}
    {/* const {id} = useParams() */}
    {/* import use params form react router dom */}



  </BrowserRouter>
  );
}

export default App;
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
import DescUpcoming from './components/DescUpcoming/DescUpcoming';
import DescribeUpcoming from './pages/DescribeUpcoming/DescribeUpcoming';
import Struck from './pages/Struck/Struck';
import { LOAD_MOVIE, LOAD_UPCOMING, LOGIN, PEMESANAN } from './GraphQL/Query/Query';
import Data from './pages/Data/Data';




function App() {

  const {data:upData} = useQuery(LOAD_UPCOMING)
  const {data:loggg} = useQuery(LOGIN)
  const {data} = useQuery(LOAD_MOVIE)
  const {data:pesanan} = useQuery(PEMESANAN)

  // console.log("testApp");
  // console.log(upData);
  // console.log("testApp2");
  // console.log(data);
  
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<Login/>} />
      {/* <Route path="/Description/:id" element={<Description/>} /> */}
      <Route path="/DescribeUpcoming/:id" element={<DescribeUpcoming upData={upData} />} />

      <Route path="/Description/:id" element={<Description data={data} />} />
      <Route path="/Description/:id/Detail" element={<Detail data={data} />} />
      <Route path="/Description/:id/Detail/Data" element={<Data pesanan={pesanan}/>} />
      {/* <Route path="/Desc/:id" element={<Desc/>} /> */}
      <Route path="/Description/:id/Detail/Screen" element={<Screen/>} />
      <Route path="/Description/:id/Detail/Struck" element={<Struck/>} />
      <Route path="/Detail" element={<Detail/>} />
      <Route path="/Movie" element={<Home/>} />
      <Route path="/Upcoming" element={<Home/>} />
      <Route path="/{data.Trailer}"  />

    </Routes>
    </BrowserRouter>
    </>
 




  );
}

export default App;
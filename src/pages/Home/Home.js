import Footer from "../../components/Footer/Footer";
import Founder from "../../components/Founder/Founder";
import History from "../../components/History/History";
import Home from "../../components/Home/Home";
import Navbars from "../../components/Navbar/Navbar";



export default function Homes(){
    return (
        <>
        <Navbars/>
        <Home />
        <Founder/>
        <History/>
        <Footer/>
        </>
    )
}
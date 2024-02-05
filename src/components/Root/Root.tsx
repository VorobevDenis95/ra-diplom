import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <Header />
            <Banner />
            <Outlet/>   
            <Footer />
        </>
    )
}

export default Root;
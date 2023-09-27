import { Route, Router, Routes } from "react-router-dom";
import Category from "../../Components/Category";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Product/Product";

const HomePage = () => {

    return (
        <>
            <div className="py-5">
                <Header/>
            </div>
            <div>
                <Category/>
            </div>
            <div>
                <Product/>
            </div>
        </>
         
    
        
    )
}

export default HomePage;
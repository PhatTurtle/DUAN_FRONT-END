import { Route, Router, Routes } from "react-router-dom";
import Category from "../../Components/Category";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Product/Product";
import Recommend from "../../Components/Recommend";


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
            <div>
                <Recommend/>
            </div>
        </>
         
    
        
    )
}

export default HomePage;
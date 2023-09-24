import { Route, Router, Routes } from "react-router-dom";
import Category from "../../Components/Category";
import Header from "../../Components/Header/Header";


const HomePage = () => {

    return (
        <section className="">
            <div className=" my-2" style={{height:'5rem'}}>
                <Header/>
            </div>

            <div className="my-2" style={{height:'250px'}}>
                <Category/>
            </div>
           
        </section>
         
    
        
    )
}

export default HomePage;
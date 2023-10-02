import { useEffect, useState } from "react";
import "./Product.css"
import axios from "axios";


const Product = () => {
     const [apiProduct, setapiProduct] = useState([])
     function handle (data){
            setapiProduct(data)
    }
     useEffect(() =>{
          axios.get('https://dummyjson.com/products')
          .then((resp) =>{
            handle(resp.data)
          })
            
  
     },[])

    
    return (
        <section>
        
        {
          
            apiProduct.map((datas) =>(
                <div class="card border-light mb-3 hovers" key={datas.id} style={{width: "260px"}}>
                    <img style={{scale:'.4'}} src="armchair.png" class="card-img-top img-pro" alt="..."/>
                    <hr />
                    <div class="card-body">
                        <h5 class="card-title">{datas.title}</h5>
                        <p class="card-text">{datas.description}</p>
                        <div className="d-flex justify-content-between">
                            <a href="#" class="btn none btn-outline-warning ">Mua Ngay</a>
                            <a href="#" class="btn none btn-outline-danger">Mua Ngay</a>
                        </div>
                    </div>
                </div>
            ))
        }
        
        
        </section>
    )
}

export default Product;
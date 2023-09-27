import "./Product.css"

const Product = () => {

    return (
        <>
        <div class="card border-light mb-3 hovers" style={{width: "250px"}}>
            <img style={{scale:'.4'}} src="armchair.png" class="card-img-top" alt="..."/>
            <hr />
            <div class="card-body">
                <h5 class="card-title">Phúc EX</h5>
                <p class="card-text">Phúc như đuồi bầu</p>
                <a href="#" class="btn btn-outline-danger">Mua Ngay</a>
            </div>
        </div>
        </>
        
    )
}

export default Product;
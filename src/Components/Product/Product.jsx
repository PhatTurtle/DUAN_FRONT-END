import "./Product.css"

const Product = () => {

    return (
        <>
        <div class="card border-light mb-3 hovers" style={{width: "260px"}}>
            <img style={{scale:'.4'}} src="armchair.png" class="card-img-top" alt="..."/>
            <hr />
            <div class="card-body">
                <h5 class="card-title">Phúc EX</h5>
                <p class="card-text">Phúc như đuồi bầu</p>
                <div className="d-flex justify-content-between">
                    <a href="#" class="btn none btn-outline-warning ">Mua Ngay</a>
                    <a href="#" class="btn none btn-outline-danger">Mua Ngay</a>
                </div>
                
            </div>
        </div>
        </>
        
    )
}

export default Product;
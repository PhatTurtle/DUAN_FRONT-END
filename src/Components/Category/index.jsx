import './style.module.css'

const Category = () => {
    return (
        <>
            <section className="container-fluid" style={{}}>
            <div className="row">
                
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-3  mx-2" style={{height:'250px', width:'48%'}}>
                           
                             <img src="sofa_dai.jpeg" alt="" style={{width:"100%", height:'250px', objectFit:'fill'}}/>   
                            
                        </div>
                        {/*  */}
                        <div className="col-lg-3 " style={{height:'250px', width:'48%'}}>
                        <img src="sofa_dai.jpeg" alt="" style={{width:"100%", height:'250px', objectFit:'fill'}}/> 
                        
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="col-lg-6 " style={{height: '200px'}}>
                    <img src="sofa_dai.jpeg" alt="" style={{width:'99%',height:'250px', objectFit:'fill'}} />
                </div>
            </div>
        </section>

        {/*  */}
        <section className='bg-dark my-3'>
            <section className="container">
                <div className="row d-flex justify-content-between     ">
                        <img style={{width:'10%'}} src="armchair.png" alt="" />
                        <img style={{width:'10%'}} src="armchair.png" alt="" />
                        <img style={{width:'10%'}} src="armchair.png" alt="" />
                </div>
                {/*  */}
                <div className='row d-flex justify-content-between text-white'>
                        <span>Mang lại cảm giác thư thái đến lạ</span>
                        <span>Mang lại cảm giác thư thái đến lạ</span>
                        <span>Mang lại cảm giác thư thái đến lạ</span>
                </div>
            </section>
        </section>
        
        </>
        

    );
}

export default Category;
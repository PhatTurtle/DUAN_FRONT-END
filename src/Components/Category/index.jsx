

const Category = () => {
    return (

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
                        <p style={{height:'250px'}}>|</p>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="col-lg-6 " style={{height: '200px'}}>
                    <img src="sofa_dai.jpeg" alt="" style={{width:'99%',height:'250px', objectFit:'fill'}} />
                </div>
            </div>
        </section>

    );
}

export default Category;
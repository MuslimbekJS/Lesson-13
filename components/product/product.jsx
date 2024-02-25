import '../sass/product.scss'



function Product (){
    return (
        <div>
            <div className='product-title'>
                <h2>
                    Product  was Built Specifically <br /> for You
                </h2>

            </div>
            <div className='product-card'>
                <div className='card'>
                    <img src="../public/icon.png" alt="" />
                    <h3>First click tests</h3>
                    <p>While most people enjoy casino gambling,</p>
                </div>
                <div className='card'>
                    <img src="../public/icon.png" alt="" />
                    <h3>First click tests</h3>
                    <p>While most people enjoy casino gambling,</p>
                </div>
                <div className='card'>
                    <img src="../public/icon.png" alt="" />
                    <h3>First click tests</h3>
                    <p>While most people enjoy casino gambling,</p>
                </div>
                <div className='card'>
                    <img src="../public/icon.png" alt="" />
                    <h3>First click tests</h3>
                    <p>While most people enjoy casino gambling,</p>
                </div>
            </div>
            <div  className='buy-now'>
            <button>Sign Up Now</button>

            </div>
        </div>
    )
}
export default Product
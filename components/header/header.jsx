import '../sass/header.scss';
import Hero from "../hero/hero";
import Product from '../product/product';
import Content from '../cont/content';
import Price from '../price/price';
import Comments from '../comments/comment';
import Footer from '../footer/footer';

function Header(){
    return(
        <div className='container'>
            <div className='header-content'>
                <div className='nav-logo'>
                    <img src="../public/Group 190.png" alt="" />
                    <h1>Product</h1>
                </div>
                <div className='nav-ul'>
                    <ul>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resource</a></li>
                        <button>Sign in</button>
                        <button>Sign up</button>
                        <li><img src="" alt="" /></li>
                    </ul>
                </div>

            </div>
            <Hero />
            <Product />
            <Content />
            <Price />
            <Comments />
            <Footer />
        </div>
        
    )
}

export default Header
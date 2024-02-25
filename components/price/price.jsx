import '../sass/price.scss'



function Price(){
    return(
        <div>
            <div>
                <h2>
                    Price Table
                </h2>
            </div>
            <div className='price-card'>
                <div className='price-table'>
                    <div className='price'>
                        <div className='price-header'>
                            <h3>Free</h3>
                            <p>
                                Brief price description
                            </p>
                        </div>
                        <div className='price-body'>
                            <p> <span className='span-1'>0 </span>   </p>
                            <p className='para'><span className='span-2'>$</span> <span className='span-3'>Per / month</span></p>
                            
                        </div>
                        <div className='price-footer'>
                            <p>Only 2 Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                        </div>
                        <div className='btn-order'>
                            <button>Order Now</button>
                        </div>
                    </div>

                </div>
                <div className='price-table'>
                    <div className='price'>
                        <div className='price-header'>
                            <h3>Free</h3>
                            <p>
                                Brief price description
                            </p>
                        </div>
                        <div className='price-body'>
                            <p> <span className='span-1'>5 </span>   </p>
                            <p className='para'><span className='span-2'>$</span> <span className='span-3'>Per / month</span></p>
                            
                        </div>
                        <div className='price-footer'>
                            <p>5+ Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                        </div>
                        <div className='btn-order'>
                            <button>Order Now</button>
                        </div>
                    </div>

                </div>
                <div className='price-table'>
                    <div className='price'>
                        <div className='price-header'>
                            <h3>Free</h3>
                            <p>
                                Brief price description
                            </p>
                        </div>
                        <div className='price-body'>
                            <p> <span className='span-1'>10 </span>   </p>
                            <p className='para'><span className='span-2'>$</span> <span className='span-3'>Per / month</span></p>
                            
                        </div>
                        <div className='price-footer'>
                            <p>10+ Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                        </div>
                        <div className='btn-order'>
                            <button>Order Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Price
import '../sass/client.scss';



function Comment(){
    return(
        <div>
            <div className='comment-header'>
                <h2>What Clients Say</h2>
                <p>Problems trying to resolve the conflict between  <br />
the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className='comment-card'>
                <div className='user-info'>
                    <div className='cards'>
                        <img src="../public/Group 204.png" alt="" />
                    </div>
                    <div className='cards-body'>
                        <p>Product helps you see how many
more days you need to work to 
reach your financial goal.</p>
                    </div>
                    <div className='cards-footer'>
                        <img src="../public/Ellipse 2.png" alt="" />
                        <p><span className='spans'>Wahid Ari</span><br /><span className='spanser'>Designer</span></p>
                    </div>
                </div>
                <div className='user-info'>
                    <div className='cards'>
                        <img src="../public/Group 204.png" alt="" />
                    </div>
                    <div className='cards-body'>
                        <p>Product helps you see how many
more days you need to work to 
reach your financial goal.</p>
                    </div>
                    <div className='cards-footer'>
                        <img src="../public/Ellipse 2.png" alt="" />
                        <p><span className='spans'>Wahid Ari</span><br /><span className='spanser'>Designer</span></p>
                    </div>
                </div>
                <div className='user-info'>
                    <div className='cards'>
                        <img src="../public/Group 204.png" alt="" />
                    </div>
                    <div className='cards-body'>
                        <p>Product helps you see how many
more days you need to work to 
reach your financial goal.</p>
                    </div>
                    <div className='cards-footer'>
                        <img src="../public/Ellipse 2.png" alt="" />
                        <p><span className='spans'>Wahid Ari</span><br /><span className='spanser'>Designer</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
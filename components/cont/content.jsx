import '../sass/content.scss'


function Content(){
    return(
        <div>
            <div className='content-title'>
                <h2>Contents Strategies</h2>
                {/* <p>We focus on ergonomics and meeting you where you work. Its only a keystroke away. </p> */}
            </div>
            <div className='content-card'>
                <div className='card-header'>
                <div className='cont-card'>
                    <img src="../public/image bg.png" alt="" />
                </div>
                <div className='text-box'>
                    <h4>By Wahid Ari <span> |  03 March 2019</span></h4>
                    <p>Increasing Prosperity With Positive Thinking</p>
                </div>

                </div>
                <div className='card-header'>
                <div className='cont-card'>
                    <img src="../public/image bg.png" alt="" />
                </div>
                <div className='text-box'>
                    <h4>By Wahid Ari <span> |  03 March 2019</span></h4>
                    <p>Increasing Prosperity With Positive Thinking</p>
                </div>

                </div>
                <div className='card-header'>
                <div className='cont-card'>
                    <img src="../public/image bg.png" alt="" />
                </div>
                <div className='text-box'>
                    <h4>By Wahid Ari <span> |  03 March 2019</span></h4>
                    <p>Increasing Prosperity With Positive Thinking</p>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Content
import '../sass/hero.scss'


function  Hero() {
    return(
        <div className='containe'>
            <div className='hero-content'>
                <div className='cont'>
                    <h1>
                        Work at the speed of thought
                    </h1>
                    <p>
                        Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
                    </p>
                    <div className='btn-group'>
                        <button>Get Started</button>
                        <a href="#"> Watch the video</a>
                    </div>
                </div>
                <div className='cont-image'>
                <img src="../public/amico.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Hero
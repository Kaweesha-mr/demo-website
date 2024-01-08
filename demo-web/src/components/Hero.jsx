const Hero = () => {
    return ( 
        <div className="hero">
            <div className="container">
                <div className="text-wrapper">
                    <h1 className="title">React</h1>
                    <p className="description">
                        The Complete Guide
                    </p>
                    <button className="cta">Get Started</button>
                </div>
                <div className="img-wrapper">
                    <img src="/react-logo.png" alt="react logo" />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;
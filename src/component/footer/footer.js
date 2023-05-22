import './footer.css';

const Footer = () => {

    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__col">                    
                        <div className="footer__item">
                            <div className="footer__title">
                                Download Our App
                            </div>
                            <div className="footer__subtitle">
                                Download app for android or ios smartphones
                            </div>
                        </div>                  
                    </div>
                    <div className="footer__col">                       
                        <div className="footer__item">
                            <div className="footer__img">
                            </div>
                            <div className="footer__subtitle">
                                Our service is designed so that you get the most out of your trip and do not waste your time and energy traveling in an unfamiliar city. 
                                You can safely book online today with only a small prepayment, and pay the rest upon arrival at the reception!
                            </div>
                        </div>                   
                    </div>
                    <div className="footer__col">                     
                        <div className="footer__item">
                            <div className="footer__title">
                                Useful links 
                            </div>
                            <div className="footer__subtitle">
                                {/* Coupons <br> Blog Post <br> Return Policy <br> Api */}
                            </div>
                        </div>                        
                    </div>
                    <div className="footer__col">                        
                        <div className="footer__item">
                            <div className="footer__title">
                                Follow us
                            </div>
                            <div className="footer__subtitle">
                                {/* Facebook <br>  Twitter <br> Instagram <br> Youtube */}
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
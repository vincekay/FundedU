import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Connect</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="http://www.facebook.com">Facebook</a></li>
                            <li><a className="grey-text text-lighten-3" href="http://www.twitter.com">Twitter</a></li>
                            <li><a className="grey-text text-lighten-3" href="http://www.linkedin.com">Linked In</a></li>
                            <li><a className="grey-text text-lighten-3" href="http://www.instagram.com">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright grey darken-4">
                <div className="container center-align">&copy; 2019 FundedU</div>
            </div>
        </footer>
    );
}

export default Footer;
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';



class student extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 'Student' }

    }
    changePage(page) {

    }
    render() {
        return (
            <div className='App'>
                <nav>
                    {/* <h1>Students</h1> */}

                    <div>
                        {/* <Link to="/student/main">
                            <button type="button" className="btn btn-info">Get Started</button>
                        </Link> */}
                        <div className='row'>
                            <div className="col-4">
                                <p><i className="fas fa-donate fa-2x"></i></p>
                                <h5><b>Check Balance</b></h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur excepturi, dolor necessitatibus cupiditate possimus aliquam. Vero architecto nisi ipsa distinctio dolorem provident, itaque tenetur quidem quae voluptas nulla dolores?</p>
                            </div>
                            <div className="col-4">
                                <p><i className="fas fa-users fa-2x"></i></p>
                                <h5><b>Share</b></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis ipsa expedita sapiente, fugiat dolor. Maxime modi, adipisci similique, sed assumenda asperiores sit quidem eum corporis provident impedit sunt nam!</p>
                            </div>
                            <div className="col-4">
                                <p><i className="fas fa-shopping-cart fa-2x"></i></p>
                                <h5><b>How to spend</b></h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur amet sint hic, molestias illum dolorem consectetur ab exercitationem commodi ipsa consequuntur, at esse vel totam. Vero corrupti hic quibusdam explicabo?</p>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        );
    }
}

export default student;
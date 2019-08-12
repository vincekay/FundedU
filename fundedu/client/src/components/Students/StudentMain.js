import React from 'react';
// import Header from './NavBar';
import { Link } from 'react-router-dom';


const StudnetMain = () => {

    return (
        <div>
            {/* <Header type = 'home_index'/> */}
            <div className='creditcardimg'>
                <img src={require('../images/creditcard.jpg')} height='250' width='333' alt="" />
            </div>

            <h3>Register or log in as a student</h3>
            <div className='funcgroup'>
                <Link to='/student/register' className='btn btn-primary'>REGISTER</Link>
                <Link to='/student/login' className='btn btn-light'>LOG IN</Link>
            </div>
        </div>
    )
}


export default StudnetMain;
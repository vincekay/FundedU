import React from 'react';
// import Header from './NavBar';
import { Link } from 'react-router-dom';


const FunderMain = () => {

    return (
        <div>
            {/* <Header type = 'home_index'/> */}
            <div className='creditcardimg'>
                <img src={require('../images/creditcard.jpg')} height='250' width='333' alt="" />
            </div>

            <h3>Register or log in as a funder</h3>
            <div className='funcgroup'>
                <Link to='/funder/register' className='btn btn-primary'>REGISTER</Link>
                <Link to='/funder/login' className='btn btn-light'>LOG IN</Link>
            </div>

        </div>
    )
}


export default FunderMain;
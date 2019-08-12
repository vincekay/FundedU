import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/index';
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";


const StudentLogin = (props) => {

    const dispatch = useDispatch();

    const formErrors = useSelector(state => state.errors);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        return () => {
            dispatch({
                type: 'GET_ERRORS',
                payload: {}
            })
        }
    }, [dispatch]);

    const initialState = {
        email: "",
        password: ""
    };

    if (isAuthenticated) {
        props.history.push("/student/dashboard");
    }


    const [Student, setStudent] = useState(initialState);

    const onChange = e => {
        setStudent({ ...Student, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        let userForm = {
            email: Student.email,
            password: Student.password,
            userType: "student"
        };
        dispatch(loginUser(userForm));
        setStudent(initialState);
    };


    return (
        <div className="container">
            <div>
                <br />
                <h2><b>Login</b> below</h2>
                <h4>Don't have an account? <Link to='/student/register'> Register </Link></h4>
                <br />

                <form onSubmit={onSubmit}>

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <input
                                value={Student.email}
                                onChange={onChange}
                                error={formErrors.email}
                                name="email"
                                type="email"
                                className={classnames("formStyle", {
                                    invalid: formErrors.email || formErrors.emailNotFound
                                })}
                                placeholder="Email"
                            />
                            <div className="errormsg">
                                {formErrors.email}
                                {formErrors.emailNotFound}
                            </div>
                            <input
                                value={Student.password}
                                onChange={onChange}
                                error={formErrors.password}
                                name="password"
                                type="password"
                                className={classnames("formStyle", {
                                    invalid: formErrors.password || formErrors.passwordIncorrect
                                })}
                                placeholder="Password"
                            />
                            <div className="errormsg">
                                {formErrors.password}
                                {formErrors.passwordIncorrect}
                            </div>
                            <br />
                            <div className="errormsg">
                                {formErrors.userTypeNoMatch}
                            </div>
                            <input value="Login" type='submit' className={classnames("btn btn-outline-secondary", {
                                invalid: formErrors.userTypeNoMatch
                            })} />
                        </div>
                        <div className="col-3"></div>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default withRouter(StudentLogin);
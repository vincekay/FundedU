import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/index';
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

const FunderLogin = (props) => {

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
        props.history.push("/funder/dashboard");
    }

    const [Funder, setFunder] = useState(initialState);

    const onChange = e => {
        setFunder({ ...Funder, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        let userForm = {
            email: Funder.email,
            password: Funder.password,
            userType: "funder"
        };
        dispatch(loginUser(userForm));
        setFunder(initialState);
    };


    return (
        <div className="container">
            <div>
                <br />
                <h2><b>Login</b> below</h2>
                <h4>Don't have an account? <Link to='/funder/register'> Register </Link></h4>
                <br />

                <form onSubmit={onSubmit}>

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <input
                                value={Funder.email}
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
                                value={Funder.password}
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
                            <div className="errormsg">{formErrors.userTypeNoMatch}</div>
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

export default withRouter(FunderLogin);
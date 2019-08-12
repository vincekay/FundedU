import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/index';
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

const FunderRegister = (props) => {

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
        name: "",
        email: "",
        password: "",
        password2: "",
        userType: ""
    };

    if (isAuthenticated) {
        props.history.push("/funder/dashboard");
    }


    const [newFunder, setNewFunder] = useState(initialState);

    const onChange = e => {
        setNewFunder({ ...newFunder, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        let userForm = {
            name: newFunder.name,
            email: newFunder.email,
            password: newFunder.password,
            password2: newFunder.password2,
            userType: "funder"
        };
        dispatch(registerUser(userForm, props.history));
        if (userForm.name !== "" && userForm.email !== "" && userForm.password !== "" && userForm.password2 === userForm.password) {

            props.history.push("/funder/login");
        }
        setNewFunder(initialState);
    };

    return (
        <div className="container">
            <div>
                <br />
                <h2><b>Reigster</b> below</h2>
                <h4>Already have an account? <Link to='/funder/login'> Login </Link></h4>
                <br />
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <input
                                value={newFunder.name}
                                onChange={onChange}
                                error={formErrors.name}
                                name="name"
                                type="text"
                                className={classnames("formStyle", {
                                    invalid: formErrors.name
                                })}
                                placeholder="Name"
                            />
                            <div className="errormsg">{formErrors.name}</div>
                            <input
                                value={newFunder.email}
                                onChange={onChange}
                                error={formErrors.email}
                                name="email"
                                type="email"
                                className={classnames("formStyle", {
                                    invalid: formErrors.email
                                })}
                                placeholder="Email"
                            />
                            <div className="errormsg">{formErrors.email}</div>
                            <input
                                value={newFunder.password}
                                onChange={onChange}
                                error={formErrors.password}
                                name="password"
                                type="password"
                                className={classnames("formStyle", {
                                    invalid: formErrors.password
                                })}
                                placeholder="Password"
                            />
                            <div className="errormsg">{formErrors.password}</div>
                            <input
                                value={newFunder.password2}
                                onChange={onChange}
                                error={formErrors.password2}
                                name="password2"
                                type="password"
                                className={classnames("formStyle", {
                                    invalid: formErrors.password2
                                })}
                                placeholder="Confirm Password"
                            />
                            <div className="errormsg">{formErrors.password2}</div>
                            <br />
                            <input value="Sign-up" type='submit' className="btn btn-outline-secondary" />
                        </div>
                        <div className="col-3"></div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(FunderRegister);
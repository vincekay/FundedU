import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssociates, addStudent, addFunder } from "../../actions/index";
import './FunderDashboard.css';

const FunderDashboard = () => {

  const user = useSelector(state => state.auth.user);
  const students = useSelector(state => state.auth.user.funding);
  const studentList = useSelector(state => state.associates);
  const dispatch = useDispatch();


  useEffect(() => {
    students.map((student) => {
      dispatch(getAssociates(student))
    })

    return () => {
      dispatch({
        type: 'GET_ERRORS',
        payload: {}
      })
    }
  }, [students], [dispatch]);

  const initialState = {
    funding: ''
  };

  const [User, setUser] = useState(initialState);


  const onChange = e => {
    setUser({ ...User, funding: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    let userForm = {
      funding: User.funding
    };

    let funderForm = {
      funding: user.id
    }
    dispatch(addStudent(user.id, userForm));
    dispatch(addFunder(User.funding, funderForm));
    setUser(initialState);
  };

  return (

    <div className='container dashB'>
      <h4>
        <b>Hey there,</b> {user.name.split(" ")[0]}
      </h4>
      <div className="row">

        <div className="col s12 m6">
          <div className="card large">
            <div className="card-image" id='student'>
            </div>
            <div className="card-content">
              <span className="card-title"><strong>Students Donating To</strong></span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div className="col s12 m6">
          <div className="row">

            <table className='highlight'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                {
                  studentList.map((student, index) => {
                    let id = index + 1;
                    return (
                      <tr key={index}>
                        <td>{id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="row">
            <div class="col s12 m12">
              <div class="card horizontal">
                <div class="card-image" id='add'>
                  <img id='addImg' src="https://www.pinclipart.com/picdir/big/164-1640725_add-user-male-icon-ico-clipart.png" />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <span className="card-title"><strong>Add Student</strong></span>
                    <form onSubmit={onSubmit}>
                      <div className="input-field inline">
                        <input
                          id='addId'
                          type="text"
                          className="validate"
                          value={User.funding}
                          onChange={onChange}
                          name='id'
                        />
                        <label for='addId'>ID</label>
                        <input type="submit" className='btn' />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default FunderDashboard;

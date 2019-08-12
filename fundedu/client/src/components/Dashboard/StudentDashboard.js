import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssociates, addReceipt } from "../../actions/index";
import './StudentDashboard.css';

const StudentDashboard = () => {

  const user = useSelector(state => state.auth.user);
  const funders = useSelector(state => state.auth.user.funding);
  const funderList = useSelector(state => state.associates);
  const receipts = useSelector(state => state.auth.user.img);
  const dispatch = useDispatch();

  useEffect(() => {
    funders.map((funder) => {
      dispatch(getAssociates(funder))
    })

    return () => {
      dispatch({
        type: 'GET_ERRORS',
        payload: {}
      })
    }
  }, [receipts], [dispatch]);

  const initialState = {
    file: null
  };

  const initialState2 = {
    amount: 0
  };
  const initialState3 = {
    description: 0
  };
  const [upload, setUpload] = useState(initialState)
  const [receiptAmount, setReceiptAmount] = useState(initialState2);
  const [desc, setDesc] = useState(initialState3);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', upload.file);
    formData.append('amount', receiptAmount.amount);
    formData.append('description', desc.description);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    let id = user.id;

    dispatch(addReceipt(id, formData, config));
    setUpload(initialState);
    setReceiptAmount(initialState2);
    setDesc(initialState3);
  }

  const onChange = (e) => {
    setUpload({ ...upload, file: e.target.files[0] });
  }

  const onChangeAmount = (e) => {
    setReceiptAmount({ ...receiptAmount, amount: e.target.value });
  }
  const onChangeDescription = (e) => {
    setDesc({ ...desc, description: e.target.value });
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  const amountTotal = () => {
    let total = 0;
    for (let i = 0; i < receipts.length; i++) {
      total += parseFloat(receipts[i].amount);
    }
    return total;
  }

  return (
    <div className='container dashB'>
      <h4>
        <b>Hey there,</b> {user.name.split(" ")[0]}
      </h4>
      <div className="row">
        <div className="col s12 m6">

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
                funderList.map((funder, index) => {
                  let id = index + 1;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{funder.name}</td>
                      <td>{funder.email}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col s12 m6">
          <div className="card large" id='supportCard'>
            <div className="card-image" id='support'>
            </div>
            <div className="card-content">
              <span className="card-title"><strong>Your funders</strong></span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card large">
            <div className="card-image" id="receipt">
            </div>
            <div className="card-content" id='receiptContent'>


              <form onSubmit={onFormSubmit}>
                <div className="file-field input-field">
                  <div className="btn-small waves-effect waves-light">
                    <span>File</span>
                    <input type="file" name="myImage" accept="image/*" onChange={onChange} />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
                <div className="input-field inline">
                  <input
                    onChange={onChangeAmount}
                    name="amount"
                    type="text"
                    // placeholder="Enter amount"
                    id='addAmount'
                  /><label for='addAmount'>Enter Amount</label>
                </div>
                <div className="input-field inline">

                  <input
                    onChange={onChangeDescription}
                    name="description"
                    type="text"
                    // placeholder="Enter description"
                    id='addDescription'
                  /><label for='addDescription'>Enter Description</label>
                </div>
                <input type="submit" className="btn-small waves-effect waves-light" />
              </form>


            </div>
            <div className="card-action">
              <h6><strong>Current Amount: {formatter.format(amountTotal())}</strong></h6>
            </div>
          </div>
        </div>
        <div className="col s12 m6">

          <table className='highlight' >
            <thead>
              <tr>
                <th>Receipt #</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody id='receiptable'>
              {
                receipts.map((receipt, index) => {
                  let id = index + 1;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td><a href={`http://localhost:5001/${receipt.path}`}>{receipt.description}</a></td>
                      <td>{formatter.format(receipt.amount)}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}


export default StudentDashboard;

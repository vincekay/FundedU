import React, { Component, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Upload = () => {

    const initialState = {
        file: null
    }

    const [upload, setUpload] = useState(initialState)

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', upload.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:5001/api/users/upload", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }

    const onChange = (e) => {
        setUpload({ file: e.target.files[0] });
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" name="myImage" accept="image/*" onChange={onChange} />
            <button type="submit">Upload</button>
        </form>
    )
}

export default Upload;
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const {id} = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (id === undefined || id === null) {
            console.error("ID is not defined. Unable to construct URL.");
            return;
        }
        axios.put(`http://localhost:8081/update/`+id, {name,phone,email})
        .then(res => {
            navigate('/');
        }).catch(err => console.log(err));
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    
    //     if (id === undefined || id === null) {
    //         console.error("ID is not defined. Unable to construct URL.");
    //         return;
    //     }
    
    //     axios.put(`http://localhost:8081/update/${id}`, { name, phone, email })
    //         .then(res => {
    //             navigate('/');
    //         })
    //         .catch(err => {
    //             console.error("Error updating user:", err);
    
    //             // Optionally, you can log more specific error information:
    //             if (err.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 console.error("Response data:", err.response.data);
    //                 console.error("Response status:", err.response.status);
    //                 console.error("Response headers:", err.response.headers);
    //             } else if (err.request) {
    //                 // The request was made but no response was received
    //                 console.error("No response received. Request details:", err.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.error("Error setting up the request:", err.message);
    //             }
    //         });
    // }
    

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' 
                    onChange={e => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder='Enter Phone' className='form-control' 
                    onChange={e => setPhone(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control' 
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update
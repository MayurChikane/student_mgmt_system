import React, { useState, useEffect } from 'react'
import { createStudent, getStudent, updateStudent } from '../services/StudentService'
import { useNavigate, useParams } from 'react-router-dom'

const StudentComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams();
    const navigator = useNavigate();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    useEffect(() => {
        if (id) {
            getStudent(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function saveOrUpdateStudent(e) {
        e.preventDefault();

        if (validateForm()) {
            const student = { firstName, lastName, email }

            if (id) {
                updateStudent(id, student).then((response) => {
                    console.log(response.data);
                    navigator('/students');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createStudent(student).then((response) => {
                    console.log(response.data);
                    navigator('/students')
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Student</h2>
        } else {
            return <h2 className='text-center'>Add Student</h2>
        }
    }

    return (
        <div className='container'>
            <div className='card' style={{ maxWidth: '600px', margin: '0 auto' }}>
                {pageTitle()}
                <form>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input
                            type='text'
                            placeholder='Enter First Name'
                            name='firstName'
                            value={firstName}
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                    </div>

                    <div className='form-group'>
                        <label>Last Name</label>
                        <input
                            type='text'
                            placeholder='Enter Last Name'
                            name='lastName'
                            value={lastName}
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='text'
                            placeholder='Enter Email'
                            name='email'
                            value={email}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                    </div>

                    <button className='btn-primary' onClick={saveOrUpdateStudent}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default StudentComponent

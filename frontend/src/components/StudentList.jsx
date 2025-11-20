import React, { useEffect, useState } from 'react';
import { listStudents, deleteStudent } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllStudents();
    }, []);

    function getAllStudents() {
        listStudents().then((response) => {
            setStudents(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewStudent() {
        navigator('/add-student')
    }

    function updateStudent(id) {
        navigator(`/edit-student/${id}`)
    }

    function removeStudent(id) {
        deleteStudent(id).then((response) => {
            getAllStudents();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <div className='card'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ margin: 0 }}>Student Roster</h2>
                    <button className='btn-primary' onClick={addNewStudent}>+ Add New Student</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student =>
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button className='btn-primary' onClick={() => updateStudent(student.id)} style={{ marginRight: '10px' }}>Update</button>
                                        <button className='btn-danger' onClick={() => removeStudent(student.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentList

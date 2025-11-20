import React, { useEffect, useState } from 'react'
import { listStudents } from '../services/StudentService'

const Dashboard = () => {
    const [studentCount, setStudentCount] = useState(0);

    useEffect(() => {
        listStudents().then((response) => {
            setStudentCount(response.data.length);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center' style={{ marginBottom: '2rem' }}>Executive Dashboard</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className='card'>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Total Students</h3>
                    <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)' }}>
                        {studentCount}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Registered in the system</p>
                </div>

                <div className='card'>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>System Status</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--success-color)', boxShadow: '0 0 10px var(--success-color)' }}></div>
                        <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>Operational</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Uptime: 99.99%</p>
                </div>

                <div className='card'>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Active Sessions</h3>
                    <div style={{ fontSize: '3rem', fontWeight: '800', color: '#a855f7' }}>
                        24
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Current users online</p>
                </div>

                <div className='card'>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Database Health</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '1.2rem', color: 'var(--success-color)' }}>Optimal</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Last backup: 2 mins ago</p>
                </div>
            </div>

            <div className='card'>
                <h3 style={{ marginBottom: '1.5rem' }}>Recent Activity Log</h3>
                <table style={{ marginTop: '0' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '20%' }}>Time</th>
                            <th style={{ width: '20%' }}>User</th>
                            <th>Action</th>
                            <th style={{ width: '15%' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10:42 AM</td>
                            <td>Admin</td>
                            <td>System Backup Completed</td>
                            <td><span style={{ color: 'var(--success-color)' }}>Success</span></td>
                        </tr>
                        <tr>
                            <td>10:30 AM</td>
                            <td>System</td>
                            <td>Automated Health Check</td>
                            <td><span style={{ color: 'var(--success-color)' }}>Passed</span></td>
                        </tr>
                        <tr>
                            <td>09:15 AM</td>
                            <td>Registrar</td>
                            <td>New Student Enrollment</td>
                            <td><span style={{ color: 'var(--accent-color)' }}>Processing</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard

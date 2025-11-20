import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigator = useNavigate();

    return (
        <div className='home-container'>
            <section className='hero-section'>
                <div className='hero-content'>
                    <h1 className='hero-title'>
                        Architecting the Future <br />
                        <span className='gradient-text'>Of Academic Excellence</span>
                    </h1>
                    <p className='hero-subtitle'>
                        Precision-engineered for the modern educational landscape. Our Student Management System delivers
                        unparalleled control, absolute security, and minimalist efficiency. Redefine administration.
                    </p>
                    <div className='hero-actions'>
                        <button className='btn-primary btn-lg' onClick={() => navigator('/dashboard')}>
                            Initialize Dashboard
                        </button>
                        <button className='btn-secondary btn-lg' onClick={() => navigator('/students')}>
                            Access Registry
                        </button>
                    </div>
                </div>
                <div className='hero-visual'>
                    <div className='floating-card card-1'>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.7rem' }}>Total Enrollment</span>
                        <h3>2,543</h3>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', borderTop: '1px solid #333', paddingTop: '0.5rem' }}>
                            <span style={{ color: 'var(--success-color)' }}>▲ 12%</span> vs last cycle
                        </div>
                    </div>
                    <div className='floating-card card-2'>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.7rem' }}>System Efficiency</span>
                        <h3>99.9%</h3>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', borderTop: '1px solid #333', paddingTop: '0.5rem' }}>
                            Optimal Performance
                        </div>
                    </div>
                    <div className='glow-effect' style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' }}></div>
                </div>
            </section>

            <section className='features-section'>
                <div className='feature-card'>
                    <div className='feature-icon' style={{ filter: 'grayscale(100%)' }}>⚡</div>
                    <h3>Velocity Architecture</h3>
                    <p>Engineered on the Spring Boot framework for microsecond-latency responses. Experience speed that keeps pace with your ambition.</p>
                </div>
                <div className='feature-card'>
                    <div className='feature-icon' style={{ filter: 'grayscale(100%)' }}>🔒</div>
                    <h3>Fortress Security</h3>
                    <p>Zero-compromise data protection. We employ military-grade encryption and rigorous access protocols to safeguard your institutional assets.</p>
                </div>
                <div className='feature-card'>
                    <div className='feature-icon' style={{ filter: 'grayscale(100%)' }}>📈</div>
                    <h3>Strategic Intelligence</h3>
                    <p>Convert raw metrics into executive insights. Our analytics engine powers data-driven decision making at the highest level.</p>
                </div>
                <div className='feature-card'>
                    <div className='feature-icon' style={{ filter: 'grayscale(100%)' }}>∞</div>
                    <h3>Infinite Scalability</h3>
                    <p>Built to expand without boundaries. From a single campus to a global network, our infrastructure adapts effortlessly to your growth.</p>
                </div>
            </section>
        </div>
    )
}

export default Home

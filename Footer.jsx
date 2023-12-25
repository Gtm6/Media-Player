import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ height: '300px' }} className='container w-100 overflow-hidden mt-5'>
            <div className="footer-content d-flex justify-content-between">
                <div className="title w-25">
                    <h3> <i class="fa-solid fa-cloud-arrow-up  me-2"></i>
                        Media Player</h3>
                    <span>
                        Designed and build with all the love in the world by the Bootstrap team with the help of our contributors

                    </span><br />
                    <span>Code licensed MIT, docs CC BY 3.0</span><br />
                    <span>Currently v5.3.2</span><br />
                </div>
                <div className="links d-flex flex-column">
                    <h3>Links</h3>
                    <Link to={'/'} style={{ color: 'white' }} className='text-decoration-none'>Landingpage</Link>
                    <Link to={'/home'} style={{ color: 'white' }} className='text-decoration-none'>Home</Link>
                    <Link to={'/history'} style={{ color: 'white' }} className='text-decoration-none'>Watchhistory</Link>
                </div>
                <div className="guides d-flex flex-column">
                    <h3>Guides</h3>
                    <a style={{ color: 'white' }} className='text-decoration-none' href="">React</a>
                    <a style={{ color: 'white' }} className='text-decoration-none' href="">React Bootstrap</a>
                    <a style={{ color: 'white' }} className='text-decoration-none' href="">React Routing</a>

                </div>
                <div className="contact d-flex flex-column">
                    <h3>Contact Us</h3>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Enter your mail' style={{ height: '40px', }} type="text" />
                        <button className='btn btn-info ms-3'>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <div style={{ color: 'white', height: '50px' }} className='icons mt-3 d-flex justify-content-between'>
                        <i class="fa-solid fa-envelope fa-2x"></i>
                        <i class="fa-brands fa-twitter fa-2x"></i>
                        <i class="fa-brands fa-github fa-2x"></i>
                        <i class="fa-brands fa-facebook fa-2x"></i>
                        <i class="fa-brands fa-instagram fa-2x"></i>
                        <i class="fa-brands fa-linkedin fa-2x"></i>

                    </div>

                </div>

            </div>

            <p className='text-center mt-4'>Copyright &copy;2023 Media Player . Build with React.</p>
        </div>

    )
}

export default Footer
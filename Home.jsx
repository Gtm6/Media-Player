import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Catogory from '../Components/Catogory'

function Home() {
    return (
        <>
            <div className='container mt--5 mb-5 d-flex justify-content-between'>
                <div className='add-videos'>
                    <Add />
                </div>
                <Link to={'/history'} style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Watch History<i class="fa-solid fa-rotate-left"></i>
                </Link>
            </div>
            <div className='container-fluid w-100 mt-5 mb-5 row'>
                <div className='all videos col-lg-9'>
                    <h2>All Uploaded Videos</h2>
                <View/>
            </div>
            <div className='catogory col-lg-3'>
                <Catogory/>
            </div>

        </div >
        </>
    )
}

export default Home

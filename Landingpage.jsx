import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landingpage() {
    return (
        <div className='container'>
            <div className='row align-item-center m-5'>
                <div className='col-lg-5'>
                    <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                    <p style={{ textAlign: 'justify' }}>Media plyer app will allow you to add or remove thrir uploaded videos,also help to arrange them in differnt catogorys by providing drag and drop functionalities</p>
                    <Link to={'/home'}className='btn btn-info mt-5 fw-bolder'>Get started</Link>
                </div>
                <div className='col'></div>
                <div className='col-lg-6'>
                    <img className='img-fluid w-100' src="https://media.tenor.com/9txCGkE71yAAAAAM/disco-bar-line.gif" alt="no image" />

                </div>
            </div>
            <div className='fetures'>
                <h3 className='text-center'>Features</h3>
                <div className='cards mt-5 d-flex justify-content-between'>
                    {/*card1*/}
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://media.tenor.com/UShIbJFy5icAAAAj/looping-infinite-loop.gif" />
                        <Card.Body>
                            <Card.Title>Managing videos</Card.Title>
                            <Card.Text>
                                user can upload ,view and remove the videos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/*card2*/}
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://media.tenor.com/2wq1PfInyYkAAAAj/music-note-dancing.gif" />
                        <Card.Body>
                            <Card.Title>Catogorize videos</Card.Title>
                            <Card.Text>
                                userng to their preffrece using drag and drop feature. can catogorise the videos accordi
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/*card3*/}
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media.tenor.com/15YUsMWt4FEAAAAi/music.gif" />
                        <Card.Body>
                            <Card.Title>Watch history</Card.Title>
                            <Card.Text>
                                user are able to se the history of watched videos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
            <div className='row mt-5 border rounded p-5'>
                <div className="col-lg-6">
                    <p><span className='fs-3'>Play Everything</span> user can upload ,view and remove the videos.user are able to se the history of watched videos
                    </p>
                    <p><span className='fs-3'>Catogorise videos</span> user can upload ,view and remove the videos.user are able to se the history of watched videos
                    </p>
                    <p><span className='fs-3'>Watch history</span> user can upload ,view and remove the videos.user are able to se the history of watched videos
                    </p>
                </div>
                <div className="col-lg-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LHvYrn3FAgI?si=g9Bi65tsg9GWSleL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    )
}

export default Landingpage

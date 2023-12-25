import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

function Videocard() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Card>
                <Card.Img onClick={handleShow} height={'200px'} variant="top" src="https://www.carmag.co.za/wp-content/uploads/2023/07/2023-Toyota-R-Supra-manual-1-800x480.webp" />
                <Card.Body>

                    <Card.Title className='d-flex justify-content-between align-item-center'>
                        <h6>Toyota Supra</h6>
                        <button className='btn'><i class="fa-solid fa-trash"></i></button>
                    </Card.Title>
                </Card.Body>
            </Card >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Video Caption</Modal.Title>
                </Modal.Header>
                <Modal.Body><iframe width="460" height="315" src="https://www.youtube.com/embed/zO5cjkCvnIY?si=AS9eOftmodn6PQ4Z?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Videocard

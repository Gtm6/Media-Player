import React, { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'

function Add() {
    const [uploadVideo, setUploadVideo] = useState({
        id: "", caption: "", url: "", link: ""
    })
    const [show, setShow] = useState(false)
    console.log(uploadVideo);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const getYoutubeEmbedLink = (e) => {
        const { value } = e.target
        if (value.includes("v=")) {
            let vID = value.split("v=")[1].slice(0, 11)
            console.log(`https://www.youtube.com/embed/${vID}`);
            setUploadVideo({ ...uploadVideo, link:`https://www.youtube.com/embed/${vID}` })
        } else {
            setUploadVideo({ ...uploadVideo, link:"" })
        }
    }

    const handleUpload = async () =>{
        const {id,caption,url,link} = uploadVideo
        if(!id || !caption || !url || !link){
            alert("Uploading form is incorrect.compleate the form properly")
        }else{
            const result = await uploadNewVideoAPI(uploadVideo)
            console.log(result);
            if(result.status>=200 && result.status<300){
                handleClose()

                setUploadVideo({
                    id:"",caption:"",url:"",link:""
                })
            }else{
                alert(result.message)
            }
        }

    }

    return (
        <>
            <div className='d-flex align-item-center'>
                <h5>Upload new video</h5>
                <button onClick={handleShow} style={{ color: 'white' }} className='btn'><i style={{ height: '40px' }} class="fa-solid fa-photo-film fa-2x"></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload New Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Make sure to fill the informations</p>
                    <FloatingLabel
                        controlId="floatingInput"
                        label=" Video id"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Video id" onChange={e => setUploadVideo({ ...uploadVideo, id: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputcaption"
                        label=" Video Caption"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Video Caption" onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputcaption"
                        label=" Video Image URL"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Video url" onChange={e => setUploadVideo({ ...uploadVideo, url: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputcaption"
                        label=" Video YouTube Link"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Video youtube link" onChange={getYoutubeEmbedLink} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} className="btn btn-info"variant="primary">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add

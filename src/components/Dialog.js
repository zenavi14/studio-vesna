import React from 'react';
import { Modal } from 'react-bootstrap';
import ImageSlider from './ImageSlider';

const Dialog = (props) => {
    return (
        <div className="modal show">
            <Modal centered show={props.show} onHide={props.close}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <ImageSlider />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    );

};

export default Dialog;

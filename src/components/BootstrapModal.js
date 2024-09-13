import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import './BootstrapModal.css'; // Import the CSS file

const BootstrapModal = () => {
    const [show, setShow] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    // Modal control handlers
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle file input change
    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    // Handle file upload (dummy function for now)
    const handleFileUpload = () => {
        if (selectedFiles.length > 0) {
            console.log(selectedFiles, 'selecteds');
            alert(`You have uploaded ${selectedFiles.length} files.`);
            handleClose();
            // You can handle the file upload process here
            setSelectedFiles([]); // Clear the file input after upload
        } else {
            alert("Please select at least one file to upload.");
        }
    };

    return (
        <>
            {/* Button to trigger the modal */}
            <div className="navPrompt" onClick={handleShow}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="upload-icon"
                    height={25}
                    width={25}
                >
                    <path fill="white" d="M10 9v6h4V9h3l-5-5-5 5h3z" />
                    <path fill="white" d="M20 18v2H4v-2H2v4h20v-4z" />
                </svg>
                <p>Upload Files</p>
            </div>

            {/* Modal component */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header >
                    <Modal.Title>Upload Files</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Select files to upload (Excel, CSV, PDF, DOC, TXT):</p>

                    {/* File input field for multiple file selection */}
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        accept=".xlsx,.csv,.pdf,.doc,.docx,.txt"
                        className="file-input"
                    />

                    {/* Display selected files */}
                    {selectedFiles.length > 0 && (
                        <div className="selected-files">
                            <h6 className='pt-2'>Selected Files:</h6>
                            <ul>
                                {Array.from(selectedFiles).map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer className='justify-content-between'>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleFileUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BootstrapModal;

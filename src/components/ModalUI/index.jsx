import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css"

export const ModalUI = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);


    return (
        <>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title f-w-600" id="exampleModalLabel">
                            Add Physical Product
                        </h5>
                        <button
                            className="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="needs-validation">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="validationCustom01" className="mb-1">
                                        Sub Category Name :
                                    </label>
                                    <input
                                        className="form-control"
                                        id="validationCustom01"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group mb-0">
                                    <label htmlFor="validationCustom02" className="mb-1">
                                        Sub Category Image :
                                    </label>
                                    <input
                                        className="form-control"
                                        id="validationCustom02"
                                        type="file"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" type="button">
                            Save
                        </button>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

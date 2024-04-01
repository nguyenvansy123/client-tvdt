import React from 'react'
import { Modal } from 'react-bootstrap'
import { FaPaperclip } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { generatePublicUrlFile, generatePublicUrlImages } from '../../../urlConfig'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export const ShowPost = ({ ...props }) => {

    const { postdetail, handleClose, show } = props

    const getFileExtension = (filePath) => {
        const parts = filePath?.split('.');
        return parts[parts?.length - 1];
    };

    // console.log(getFileExtension(postdetail.linkDownload))
    // const docs = [{
    //     url: generatePublicUrlFile(postdetail.linkDownload),
    //     fileType: getFileExtension(postdetail.linkDownload),
    //     // fileName: "6 THANG CUOI - BAO CAO CSSK NGUOI CAO TUOI - SYT.docx",
    // }]
    // console.log(generatePublicUrlFile(postdetail.linkDownload))
    return (
        <Modal width="100%" size="lg" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
            <Modal.Header closeButton>
                <Modal.Title className='fs-1'>Bài viết</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section id="main-content">
                    <section className="book-detail">
                        <div className="row">
                            <div className="col-12">
                                {/* <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="https://elib.bvdktuthainguyen.gov.vn">
                                    <IoHomeOutline />
                                </a>
                            </li>
                            <li className="breadcrumb-item"><a href="#">Ngoại khoa</a></li>
                            <li className="breadcrumb-item"><a href="#">Gây mê hồi sức</a></li>
                        </ol> */}
                            </div>
                            <div className="col-12 col-md-4">
                                <figure className="book-cover">
                                    <img
                                        src={generatePublicUrlImages(postdetail.arliclePictures) && generatePublicUrlImages(postdetail.arliclePictures)}
                                        alt="Tài liệu về gây mê hồi sức"
                                    />
                                </figure>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="book-info">
                                    <div className="book-title">{postdetail.title}</div>
                                    <div className="book-info__item">
                                        <span className="info-title">Tác giả:</span>
                                        <span className="info-content">{postdetail.publisher}</span>
                                    </div>

                                    <div className="book-info__item">
                                        <span className="info-title">Ngày xuất bản</span>
                                        <span className="info-content">{postdetail.updatedAt}</span>
                                    </div>
                                    <div className="book-info__item">
                                        <span className="info-title">Số trang:</span>
                                        <span className="info-content">{postdetail.numberOfPages}</span>
                                    </div>
                                    <div className="book-info__item">
                                        <span className="info-title">File nội dung:</span>
                                        <span className="info-content">
                                            <a
                                                className="btn-bvdk btn-sm btn-rounded"
                                                href={postdetail.linkDownload}
                                                target="_blank"
                                            >
                                                <i className="fal fa-download" /> Tải xuống
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="book-content">
                            {/* <iframe src={postdetail.linkPreview} allow="autoplay" width="100%" height="480"></iframe> */}
                            {/* <object data={generatePublicUrlFile(postdetail.linkDownload)} type="application/pdf" width="100%" height="480">
                                <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href={postdetail.linkPreview}>click here to download the PDF file.</a></p>
                            </object> */}
                            {/* <DocViewer
                                documents={docs}
                                pluginRenderers={DocViewerRenderers}
                            /> */}
                        </div>
                    </section>
                </section>
            </Modal.Body>
        </Modal>
    )
}
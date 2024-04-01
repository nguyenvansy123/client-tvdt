import React from 'react'
import "./style.css"
import { IoHomeOutline } from 'react-icons/io5'
import { FaDownload, FaPaperclip } from 'react-icons/fa'
import { GrDownloadOption } from "react-icons/gr";

export const DetailPost = () => {
    return (
        <section id="main-content">
            <section className="book-detail">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="https://elib.bvdktuthainguyen.gov.vn">
                                    <IoHomeOutline />
                                </a>
                            </li>
                            <li className="breadcrumb-item"><a href="#">Ngoại khoa</a></li>
                            <li className="breadcrumb-item"><a href="#">Gây mê hồi sức</a></li>
                        </ol>
                    </div>
                    <div className="col-12 col-md-4">
                        <figure className="book-cover">
                            <img
                                src="https://elib.bvdktuthainguyen.gov.vn/uploads//bookCover/ta-i-lie-u-ve-gay-me-ho-i-su-c_1603246535.png"
                                alt="Tài liệu về gây mê hồi sức"
                            />
                        </figure>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="book-info">
                            <div className="book-title">Tài liệu về gây mê hồi sức</div>
                            <div className="book-info__item">
                                <span className="info-title">Tác giả:</span>
                                <span className="info-content">phòng ĐT-CĐT</span>
                            </div>
                            <div className="book-info__item">
                                <span className="info-title">Nhà xuất bản:</span>
                                <span className="info-content">phòng ĐT-CĐT</span>
                            </div>
                            <div className="book-info__item">
                                <span className="info-title">Ngày xuất bản</span>
                                <span className="info-content">21/10/2020</span>
                            </div>
                            <div className="book-info__item">
                                <span className="info-title">Số trang:</span>
                                <span className="info-content">516</span>
                            </div>
                            <div className="book-info__item">
                                <span className="info-title">File nội dung:</span>
                                <span className="info-content">
                                    <a
                                        className="btn-bvdk btn-sm btn-rounded"
                                        href="#"
                                        target="_blank"
                                    >
                                     <GrDownloadOption /> Tải xuống
                                    </a>
                                </span>
                            </div>
                            <div className="book-info__item">
                                <span className="info-title">File đính kèm:</span>
                                <div className="info-content">
                                    <a
                                        role="button"
                                        className="btn-link btn-sm attach_files"
                                        href="#"
                                        target="_blank"
                                    >
                                        <FaPaperclip />
                                        TÀI-LIỆU-GÂY-MÊ-HỒI-SỨC-CHO-BÁC-SỸ.pdf
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="book-content" style={{ height: "1071.1px" }}>
                    <object data="https://elib.bvdktuthainguyen.gov.vn/uploads//85/9b/859bd61dc40d6bf857c00424fb4e7a59_1603246527.pdf" type="application/pdf" width="100%" height="100%"></object>
                </div>
            </section>
        </section>
    )
}

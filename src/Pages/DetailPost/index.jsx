import React from 'react'
import "./style.css"
import { IoHomeOutline } from 'react-icons/io5'
import { FaDownload, FaPaperclip } from 'react-icons/fa'
import { GrDownloadOption } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import fileDownload from 'js-file-download';
import { downloadFile, getPostsById } from '../../actions/article.action';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Loader } from '../../components/HOC/Loader';
import { useState } from 'react';
import { getAllCategory } from '../../actions';
import { generatePublicUrlFile, generatePublicUrlImages } from '../../urlConfig';

export const DetailPost = () => {
    const dispatch = useDispatch();
    const { slug, id } = useParams();
    const article = useSelector(state => state.article.postDetail)
    const loading = useSelector(state => state.article.loading)
    const category = useSelector(state => state.category.categories)

    const [title, setTitle] = useState()

    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getPostsById(id));
    }, [slug]);

    useEffect(() => {
        if (category.length > 0) {
            const selectedCategory = category.find(cat => cat.slug === slug);
            setTitle(selectedCategory ? selectedCategory.name : 'Tất cả tài liệu');
        }
    }, [slug, category]);

    const cat = () => {
        if (category.categories.length > 0) {
            const selectedCategory = category.find(cat => cat._id === article.category);
            if (selectedCategory) {
                setTitle(selectedCategory.name)
            }
            else {
                setTitle("Tất cả")
            }
        }
    }

    const formatDay = (originalDateString) => {
        const date = new Date(originalDateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate
    }

    const download = (filename, id) => {
        dispatch(downloadFile(filename, id))
    }

    return (
        <section id="main-content">
            <Loader isLoading={loading}>
                <section className="book-detail">
                    <div className="row">
                        <div className="col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">
                                        <IoHomeOutline />
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">

                                    <Link to={`/phan-loai/${slug}`}> {title} </Link>
                                </li>
                            </ol>
                        </div>
                        <div className="col-12 col-md-4">
                            <figure className="book-cover">
                                <img
                                    src={generatePublicUrlImages(article.arliclePictures)}
                                    alt="Tài liệu về gây mê hồi sức"
                                />
                            </figure>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="book-info">
                                <div className="book-title">{article.title}</div>
                                <div className="book-info__item">
                                    <span className="info-title">Tác giả:</span>
                                    <span className="info-content">{article.publisher}</span>
                                </div>
                                <div className="book-info__item">
                                    <span className="info-title">Nhà xuất bản:</span>
                                    <span className="info-content">{article.publisher}</span>
                                </div>
                                <div className="book-info__item">
                                    <span className="info-title">Ngày đăng bài</span>
                                    <span className="info-content">{formatDay(article.createdAt)}</span>
                                </div>
                                <div className="book-info__item">
                                    <span className="info-title">Số trang:</span>
                                    <span className="info-content">{article.numberOfPages}</span>
                                </div>
                                <div className="book-info__item">
                                    <span className="info-title">File nội dung:</span>
                                    <span className="info-content">
                                        <a
                                            className="btn-bvdk btn-sm btn-rounded"
                                            // href="#"
                                            target="_blank"
                                            onClick={() => download(article.linkDownload, article._id)}
                                            download
                                        >
                                            <GrDownloadOption /> Tải xuống
                                        </a>
                                    </span>
                                </div>
                                {/* <div className="book-info__item">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="book-content" style={{ height: "1071.1px" }}>
                        <object data={generatePublicUrlFile(article.linkDownload)} type="application/pdf" width="100%" height="100%" title={id}></object>
                    </div>
                </section>
            </Loader>
        </section>
    )
}

import React from 'react'
import { FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'

export const ListItem = ({data}) => {
    return (
        <div className="books-wrap__body row d-flex">
            <div className="books-wrap__item col-6 col-md-4 col-lg-3">
                <figure className="books-wrap__item-cover">
                    <a href="post/1">
                        <img
                            src="https://elib.bvdktuthainguyen.gov.vn/uploads//bookCover/suy-ho-hap-so-sinh_1695697907.png"
                            alt="SUY HÔ HẤP SƠ SINH"
                        />
                    </a>
                </figure>
                <div className="books-wrap__item-content my-4 ">
                    <h3 className="books-wrap__item-title">
                        <a href="#" className='text-black fs-4  fw-bold'>
                            SUY HÔ HẤP SƠ SINH
                        </a>
                    </h3>
                    <ul className="books-wrap__item-info d-flex">
                        <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Lượt xem"
                        >
                            <FaEye /> 67
                        </li>
                        <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Lượt tải tài liệu"
                        >
                            <IoMdDownload /> 48
                        </li>
                    </ul>
                </div>
            </div>
            <div className="books-wrap__item col-6 col-md-4 col-lg-3">
                <figure className="books-wrap__item-cover">
                    <a href="post/1">
                        <img
                            src="https://elib.bvdktuthainguyen.gov.vn/uploads//bookCover/suy-ho-hap-so-sinh_1695697907.png"
                            alt="SUY HÔ HẤP SƠ SINH"
                        />
                    </a>
                </figure>
                <div className="books-wrap__item-content my-4 ">
                    <h3 className="books-wrap__item-title">
                        <a href="#" className='text-black fs-4  fw-bold'>
                            SUY HÔ HẤP SƠ SINH
                        </a>
                    </h3>
                    <ul className="books-wrap__item-info d-flex">
                        <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Lượt xem"
                        >
                            <FaEye /> 67
                        </li>
                        <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Lượt tải tài liệu"
                        >
                            <IoMdDownload /> 48
                        </li>
                    </ul>
                </div>
            </div>
            <div className="books-wrap__item col-6 col-md-4 col-lg-3">
                <figure className="books-wrap__item-cover">
                    <a href="post/1">
                        <img
                            src="https://elib.bvdktuthainguyen.gov.vn/uploads//bookCover/suy-ho-hap-so-sinh_1695697907.png"
                            alt="SUY HÔ HẤP SƠ SINH"
                        />
                    </a>
                </figure>
                <div className="books-wrap__item-content my-4 ">
                    <h3 className="books-wrap__item-title">
                        <a href="#" className='text-black fs-4  fw-bold'>
                            SUY HÔ HẤP SƠ SINH
                        </a>
                    </h3>
                    <ul className="books-wrap__item-info d-flex">
                        <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Lượt xem"
                        >
                            <FaEye /> 67
                        </li>
                        <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Lượt tải tài liệu"
                        >
                            <IoMdDownload /> 48
                        </li>
                    </ul>
                </div>
            </div>
            <div className="books-wrap__item col-6 col-md-4 col-lg-3">
                <figure className="books-wrap__item-cover">
                    <a href="post/1">
                        <img
                            src="https://elib.bvdktuthainguyen.gov.vn/uploads//bookCover/suy-ho-hap-so-sinh_1695697907.png"
                            alt="SUY HÔ HẤP SƠ SINH"
                        />
                    </a>
                </figure>
                <div className="books-wrap__item-content my-4 ">
                    <h3 className="books-wrap__item-title">
                        <a href="#" className='text-black fs-4  fw-bold'>
                            SUY HÔ HẤP SƠ SINH
                        </a>
                    </h3>
                    <ul className="books-wrap__item-info d-flex">
                        <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Lượt xem"
                        >
                            <FaEye /> 67
                        </li>
                        <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Lượt tải tài liệu"
                        >
                            <IoMdDownload /> 48
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

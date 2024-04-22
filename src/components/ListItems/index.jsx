import React from 'react'
import { FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { generatePublicUrlImages } from '../../urlConfig'
import { Link } from 'react-router-dom'

export const ListItem = ({ data,slug }) => {
    return (
        <div className="books-wrap__body row d-flex">

            {data.map(i => (
                <div className="books-wrap__item col-6 col-md-4 col-lg-3" key={i._id}>
                    <figure className="books-wrap__item-cover">
                        <Link to={`/${slug}/${i._id}`}>
                            <img
                                // src="https://elib.bvdktuthainguyen.gov.vn/uploads//bookCover/suy-ho-hap-so-sinh_1695697907.png"
                                src={generatePublicUrlImages(i.arliclePictures)}
                                alt={i.title}
                            />
                        </Link>
                    </figure>
                    <div className="books-wrap__item-content my-4 ">
                        <h3 className="books-wrap__item-title">
                            <Link to={`/${slug}/${i._id}`} className='text-black fs-4  fw-bold'>
                                {i.title}
                            </Link>
                        </h3>
                        <ul className="books-wrap__item-info d-flex">
                            <li
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Lượt xem"
                            >
                                <FaEye /> {i.viewTotal}
                            </li>
                            <li
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Lượt tải tài liệu"
                            >
                                <IoMdDownload />
                                {i.downloadTotal}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}


        </div>
    )
}

import React, { useEffect } from 'react'
import { FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { ListItem } from '../../components/ListItems'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const FilterPost = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const category = useSelector(state => state.category)
    // useEffect({

    // }, [])
    console.log(category.categories);

    // const renderTitle = () => {
    //     const {slug} = params;
    //     category.categories
    //     return 
    // }

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
                    <div className="books-wrap__title">
                        <h2>Tất cả tài liệu</h2>
                    </div>

                    <ListItem />
                </div>
            </section>
        </section>
    )
}

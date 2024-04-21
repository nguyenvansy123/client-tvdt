import React, { useEffect,useState } from 'react'
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
    const article = useSelector(state => state.article)

    
    // useEffect({

    // }, [])
    // console.log(article);

    const renderTitle = () => {
        const { slug } = params;
        const _category = category.categories.find(cat => cat.slug === slug);
        if (!_category)
        {
            // dispatch()
            return (<h2>Tất cả tài liệu</h2>)
        }

        return (<h2 >{_category.name}</h2>)

    }

    const renDataList = ()=>{
        // re
     }

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
                            <li className="breadcrumb-item"><a href="#" >Ngoại khoa</a></li>
                            <li className="breadcrumb-item"><a href="#">Gây mê hồi sức</a></li>
                        </ol>
                    </div>
                    <div className="books-wrap__title">
                        {renderTitle()}
                    </div>

                    <ListItem />
                </div>
            </section>
        </section>
    )
}

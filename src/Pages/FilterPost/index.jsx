import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { ListItem } from '../../components/ListItems'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getAllPost, getPostByCategory } from '../../actions'
import { Loader } from '../../components/HOC/Loader'

export const FilterPost = () => {
    const { slug } = useParams();
    const dispatch = useDispatch()
    const category = useSelector(state => state.category)
    const articles = useSelector(state => state.article.post)
    const loading = useSelector(state => state.article.loading)

    const [title, setTitle] = useState()
    const [catId, setCatId] = useState(null)
    const query = {
        currentPage: 1,
        limit: 10
    }

    useEffect(() => {
        if (category.categories.length > 0) {
            const selectedCategory = category.categories.find(cat => cat.slug === slug);
            setTitle(selectedCategory ? selectedCategory.name : 'Tất cả tài liệu');
            setCatId(selectedCategory ? selectedCategory._id : null)
            renderData(selectedCategory?._id)
        }
    }, [slug, category.categories]);


    const renderData = (catId) => {
        if (catId)
            dispatch(getPostByCategory(query, catId))
        else
            dispatch(getAllPost(query))
    }

    return (
        <section id="main-content">
            <section className="book-detail">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">
                                    <IoHomeOutline />
                                </Link>
                            </li>
                            <li className="breadcrumb-item"><a >{title}</a></li>
                        </ol>
                    </div>
                    <div className="books-wrap__title">
                        <Loader isLoading={category.loading} >
                            <h2>{title}</h2>
                        </Loader>

                    </div>
                    <Loader isLoading={loading} >
                        {
                            articles.length > 0 ? <ListItem data={articles} slug={slug} />:<h2 className='text-center m-5'>chưa có tài liệu nào cả</h2>
                        }
                    </Loader>
                </div>
            </section>
        </section >
    )
}

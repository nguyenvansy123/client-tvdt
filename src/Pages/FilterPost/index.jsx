import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { ListItem } from '../../components/ListItems'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getAllPost, getPostBySlug } from '../../actions'
import { Loader } from '../../components/HOC/Loader'

export const FilterPost = () => {
    const { slug } = useParams();
    const dispatch = useDispatch()
    const category = useSelector(state => state.category)
    const articles = useSelector(state => state.article.post)
    const loading = useSelector(state => state.article.loading)

    const [title, setTitle] = useState()

    const query = {
        currentPage: 1,
        limit: 10
    }

    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllPost(query));
    }, [slug]);

    useEffect(() => {
        if (category.categories.length > 0) {
            const selectedCategory = category.categories.find(cat => cat.slug === slug);
            setTitle(selectedCategory ? selectedCategory.name : 'Tất cả tài liệu');
            // selectedCategory ? dispatch(getPostBySlug(query)) : dispatch(getAllPost(query));
        }
    }, [slug, category.categories]);

    const renDataList = () => {
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
                            <li className="breadcrumb-item"><a href="#" >{title}</a></li>
                        </ol>
                    </div>
                    <div className="books-wrap__title">
                        <Loader isLoading={category.loading} >
                            <h2>{title}</h2>
                        </Loader>

                    </div>
                    <Loader isLoading={loading} >
                        <ListItem data={articles} slug={slug} />
                    </Loader>

                    {/* <ListItem /> */}
                </div>
            </section>
        </section>
    )
}

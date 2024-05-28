import React, { useEffect, useState } from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Loader } from '../../components/HOC/Loader'
import { useDispatch, useSelector } from 'react-redux';
import useOnceEffect from '../../helpers/UseOnceEffect';
import { getNewPost, getTopDownloadPost } from '../../actions';
import { ListItem } from '../../components/ListItems';


export const Home = () => {
  const dispatch = useDispatch()
  const newArticles = useSelector(state => state.article.postNew)
  const topDownloadArticles = useSelector(state => state.article.postTopDownload)


  useOnceEffect(() => {
    dispatch(getNewPost())
    dispatch(getTopDownloadPost())
  }, [])

  return (
    <section id="main-content">
      <section className="books-wrap mb-5">
        <div className="books-wrap__title">
          <h2>Tài liệu mới</h2>
          {/* <a href="#" className="books-wrap__view-all fs-5">Xem tất cả</a> */}
        </div>
        {
          newArticles.length > 0 ? <ListItem data={newArticles} slug="new-articles" /> : <h2 className='text-center m-5'>chưa tài liệu được tải nên</h2>
        }

      </section>
      <section className="books-wrap mb-5">
        <div className="books-wrap__title">
          <h2>Tài liệu được tải nhiều</h2>
          {/* <a href="#" className="books-wrap__view-all fs-5">Xem tất cả</a> */}
        </div>
        {
          topDownloadArticles.length > 0 ? <ListItem data={topDownloadArticles} slug="top-dowload-articles" /> : <h2 className='text-center m-5'>chưa có tài liệu nào được tải xuống</h2>
        }
      </section>
    </section>
  )
}

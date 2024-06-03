import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions/category.action';
import "./style.css"
import { addPost, deletePostById, getAllPost, getPostsByUser, updatePostById, updateStatusPostById } from '../../actions';
import { TableModal } from '../../components/TableModal';
import { CreatePost } from './Form/createPost';
import { ShowPost } from './Form/showPost';
import { EditPost } from './Form/editPost';
import { IoEyeSharp } from 'react-icons/io5';
import { FaFilePen } from "react-icons/fa6";
import { FaTrash } from 'react-icons/fa';

export const ArticleManagement = () => {
    const dispatch = useDispatch();

    const article = useSelector(state => state.article)
    const auth = useSelector(state => state.auth);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (auth.user.role !== "thành viên") {
            return window.alert("Bạn phải là thành viên chính thức mới có thể đăng tài liệu vui lòng đợi admin phê duyệt tài khoản.");
        }
        setShow(true)
    };

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);

    const [hasFetchedData, setHasFetchedData] = useState(false);
    const [selectedOption, setSelectedOption] = useState(false);

    const [postdetail, setPostDetail] = useState("")
    const [postEdit, setPostEdit] = useState("")

    const [titleTable, setTitleTable] = useState(["Tiêu đề", "Tác giả", "Trạng thái", "Xử lý"])

    useEffect(() => {
        // if (!hasFetchedData) {
        const userString = localStorage.getItem('user');
        const userObject = JSON.parse(userString);
        dispatch(getPostsByUser(userObject?._id));
        setHasFetchedData(true);
        // }
    }, [dispatch]);

    const showDetailPost = (_post) => {
        setPostDetail(_post)
        handleShow2()
    }

    const handleShow3 = (value) => {
        setPostEdit(value)
        return setShow3(true)
    };

    const deletePost = (_id) => {

        const checkDelete = window.confirm("Bạn có muốn xóa bài đăng này không")
        if (checkDelete)
            dispatch(deletePostById(_id, updateData))
    }

    const updateData = () => {
        const userString = localStorage.getItem('user');
        const userObject = JSON.parse(userString);
        dispatch(getPostsByUser(userObject?._id));
        setHasFetchedData(true);
    }



    const modifiedPost = article?.postForUser?.map(_post => {
        const showbtn = <button className='btn border-black fs-5 ' onClick={() => showDetailPost(_post)} title='view' ><IoEyeSharp /></button>;
        const editbtn = <button className='btn border-black fs-5 mx-2' onClick={() => handleShow3(_post)} title='edit' ><FaFilePen /></button>;
        const deletebtn = <button className='btn border-black fs-5' onClick={() => deletePost(_post._id)} title='delete' ><FaTrash /></button>;
        const actionbtn = <div className="d-flex">{showbtn} {editbtn} {deletebtn}</div>;
        return {
            title: _post.title,
            publisher: _post.publisher,
            status: _post.status,
            actionbtn
        };
    }) || [];

    return (
        <>
            <div className="table-wrapper">
                <div className="white_box_tittle list_header">
                    <h4>Bài viết</h4>
                    <div className="box_right d-flex lms_block">
                        <div className="add_button ms-2">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_2" onClick={handleShow}>Add New</a>
                        </div>
                    </div>
                </div>
                {
                    article.postForUser && article?.postForUser?.length > 0 ? (
                        <TableModal title={titleTable} data={modifiedPost} />
                    ) : (
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                            <h3>Không có bài viết nào</h3>
                        </div>
                    )
                }
            </div>

            <ShowPost postdetail={postdetail} handleClose={handleClose2} show={show2} />
            <CreatePost addPost={addPost} updateData={updateData} handleClose={handleClose} show={show} />
            <EditPost data={postEdit} updatePost={updatePostById} updateData={updateData} handleClose={handleClose3} show={show3} />
        </>
    )
}

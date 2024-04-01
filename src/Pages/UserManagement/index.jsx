import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../actions/user.action';

export const UserManagement = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getAllUser())

  }, [dispatch])


  const handleEdit = (user) => {
    // Xử lý chỉnh sửa người dùng ở đây
  };

  const handleDelete = (user) => {
    // Xử lý xóa người dùng ở đây
  };


  return (

    <div className="table-wrapper">
      <div className="white_box_tittle list_header">
        <h4>Quản lý user</h4>
        <div className="box_right d-flex lms_block">
          <div className="add_button ms-2">
            <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_2" >Add New</a>
          </div>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr className='fs-3'>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Xử lý</th>
          </tr>
        </thead>
        <tbody className='fs-4'>
          <tr >
            <td>1</td>
            <td>Admin</td>
            <td>Thành Viên Không Chính thức</td>
            <td>
              <Button variant="primary" onClick={(e) => this.handleEdit(e)}>Phê duyệt</Button>
              <Button className='mx-2' variant="danger" onClick={(e) => this.handleDelete(e)}>Xóa</Button>
            </td>
          </tr>
          <tr >
            <td>2</td>
            <td>nguyễn văn A</td>
            <td>Thành Viên</td>
            <td>
              {/* <Button variant="primary" onClick={(e) => this.handleEdit(e)}>Phê duyệt</Button> */}
              <Button className='mx-2' variant="danger" onClick={(e) => this.handleDelete(e)}>Xóa</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

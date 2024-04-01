import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategory } from '../../actions/category.action';

export const Sidebar= () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category)


    const [hasFetchedData, setHasFetchedData] = useState(false);

    useEffect(() => {
        // Chỉ gọi action khi chưa có dữ liệu và component được render
        if (!hasFetchedData) {
            dispatch(getAllCategory()); // Gọi action để lấy danh mục từ backend
            setHasFetchedData(true); // Đánh dấu rằng đã gọi action
        }
    }, [dispatch, hasFetchedData]);


    const renderListMenu = () => {
        return category?.categories.map((_category) => {
            // return <li key={_category._id}><Link to={`danh-muc/${_category.slug}`}>{_category.name}</Link></li>
            return <li key={_category._id}><Link to='/'>{_category.name}</Link></li>
        })
    }

    return (
        <section className="sidebar-widget">
            <h3 className="sidebar-widget__title fs-4">Phân loại tài liệu</h3>
            <div className="sidebar-widget__body" id="sidebar-menu">
                <ul>
                    <li><Link href="/">Tất cả </Link></li>

                    {renderListMenu()}
                </ul>
            </div>
        </section>
    )
}

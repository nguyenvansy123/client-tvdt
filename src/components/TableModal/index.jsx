import React from 'react'
import { Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export const TableModal = ({ title, data }) => {
    console.log(data);

    const checkStatus = (value) => {
        if (value == "đã được phê duyệt")
            return (<Badge bg="success">success</Badge>)
        else
            return (<Badge bg="warning" text="dark">Warning</Badge>)
    }

    return (
        <>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        {Array.from({ length: title?.length }).map((_, index) => (
                            <th key={index} className='fs-3'>{title[index]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((_, i) => (
                        <tr key={i} >
                            {
                                // Array.from({ length: Object.keys(data[i])?.length }).map(
                                //     (_, index) =>
                                //     (
                                //         <td key={index} className='fs-4'>{data[i][Object.keys(data[i])[index]]}</td>
                                //     )

                                // )
                            }
                            {/* publisher :    "Bs CkI: Phạm Văn Uy, Ths. Bs: Lương Ngọc Diễm Hằng, CN. Đd: Phạm Đăng Khoa"
                            status     :     "đã được phê duyệt"
                            title :"Chỉnh nha phẫu thuật hay phẫu thuật chỉnh nha" */}
                            <td className='fs-4'>{_.title}</td>
                            <td className='fs-4'>{_.publisher}</td>
                            <td className='fs-4'>{checkStatus(_.status)}</td>
                            <td className='fs-4'>{_.actionbtn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}



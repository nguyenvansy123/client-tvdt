import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Profile = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={6}>
                    <h1>Tài khoản của tôi</h1>
                    <p>Xem và chỉnh sửa thông tin cá nhân của bạn ở bên dưới.</p>

                </Col>
                <Col xs={6} md={6}>
                    <button className='btn_5 py-2 px-5 fs-5'>Bỏ</button>
                    <button className='btn_4'>Cập nhật thông tin</button>
                </Col>

            </Row>
        </Container>
    )
}


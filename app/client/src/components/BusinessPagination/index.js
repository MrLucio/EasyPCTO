import React from 'react';
import { Pagination, Row, Col } from 'rsuite';

const BusinessPagination = (props) => (
    <Row style={{ marginTop: 30 }}>
        <Col xs={24} sm={24} md={8} />
        <Col xs={24} sm={24} md={8}>
            <Pagination
                {...props}
            />
        </Col>
        <Col xs={24} sm={24} md={8} />
    </Row>
)

export default BusinessPagination;
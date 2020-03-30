import React from 'react';
import { Panel, Col } from 'rsuite';

const cardStyle = (color = "green") => {
    return {
        borderLeft: "30px solid " + color,
        borderRight: "5px solid " + color,
        padding: 30
    }
}

const BusinessCard = ({name, color, course, email, tel}) => (
    <Panel bordered style={cardStyle(color)} bodyFill>
        <Col xs={24} sm={24} md={6}>
            <h5><b>{name}</b></h5>
        </Col>
        <Col xs={24} sm={24} md={6}>
            {course}
        </Col>
        <Col xs={24} sm={24} md={6}>
            <a href={`mailto:${email}`}>
                {email}
            </a>
        </Col>
        <Col xs={24} sm={24} md={6}>
            <a href={`tel:${tel}`}>
                {tel}
            </a>
        </Col>
    </Panel>
);

export default BusinessCard;
import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCards = ({ title, description, imgUrl, LiveLink }) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="..." />
            <div className='proj-text'>
                <h4>{title}</h4>
                <span>{description}</span> <br></br>
                <a href={LiveLink} target="blank">Live Link</a>
            </div>
        </div>
    </Col>
  )
}

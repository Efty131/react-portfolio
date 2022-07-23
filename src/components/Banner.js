import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useTypewriter } from 'react-simple-typewriter';

import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
//   Typing effect
    const { text } = useTypewriter({
      words: ['Developer', 'Programmer', 'Gamer'],
      loop: 0
      
})

    const handleClick = () =>{
        console.log("Clicked");
    }
    
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xm={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`I'm Efty `}<span className='wrap text-primary'>{text}</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit consectetur culpa molestias saepe incidunt suscipit, et doloribus ab temporibus quo cupiditate officiis minima delectus nisi hic modi ea iusto soluta necessitatibus ex dolor.</p>
                    <button onClick={handleClick}>Let's Connect < ArrowRightCircle size={25} /> </button>
                </Col>
                <Col xm={12} md={6} xl={5}>
                    <img src={headerImg} alt='HeaderImage' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
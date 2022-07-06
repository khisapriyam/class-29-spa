import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <section className='header shadow-sm'>
         <Container>
            <Row>
                <Col md={3}>
                    <div className="logo">
                        <Link to="/"><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" /></Link>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/add-devs"> Create new devs</Link></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    
    </section>
  )
}

export default Header;


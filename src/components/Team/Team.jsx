import React from 'react'
import axios from "axios";
import { useState } from 'react'
import { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Team.css'


const Team = () => {

    //load all devs
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/devs').then(res => {
            setDevs(res.data)
        }).catch(error => {
            console.log(error)
        })


    },[devs]);


  return (
    <section className='team'>
        <Container className='my-5'>
            <Row>
                {
                    devs.map( data => 
                        <Col md={3}>
                            <Card className='shadow-sm'>
                                <Card.Img style={{ height:'200px', objectFit:'cover'}}src={data.photo}/>
                                <Card.Body>
                                    <h3>{data.name}</h3>
                                    <p>{data.cell}</p>
                                    <Link className='btn btn-sm btn-success' to={`/profile/${data.username}`}>View Profile</Link>   
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        )
                }
            </Row>
        </Container>
    </section>
  )
}

export default Team;


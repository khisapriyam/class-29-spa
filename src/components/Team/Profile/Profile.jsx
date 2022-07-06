import React from 'react'
import axios from "axios";
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Profile.css'

const Profile = () => {

    //get user params
    //const params = useParams();
    const {username} = useParams();

    //devs single profile data

    let [profile, setProfile] = useState({
        name : '',
        skill: '',
        cell: '',
        photo : '',
        id: '',
        email: ''
    });
    
    
    useEffect(() =>{
        axios.get(`http://localhost:5050/devs?username=${username}`).then(res => {
            setProfile({
                ...res.data[0]
                // name: res.data[0].name,
                // email: res.data[0].email,
                // skill: res.data[0].skill,
                // photo: res.data[0].photo,
                // cell: res.data[0].cell
                
            });
        }).catch(error => {
            console.log(error);
        });

    },[]);
   

  return (
    <>
    <Container className='my-5'>
        <Row className='justify-content-center'>
            <Col md ={6}>
                <Card className='shadow'>
                    <Card.Body>
                        <div className="profile">
                            <img src={profile.photo} alt="" />
                            <h2>{profile.name}</h2>
                            <p>{profile.cell}</p>
                            <span className='skill'>{profile.skill}</span>

                            <div className="social-icon">
                                <ul>
                                    <li><a href='#'><i class='bx bxl-facebook'></i></a></li>
                                    <li><a href='#'><i class='bx bxl-twitter'></i></a></li>
                                    <li><a href='#'><i class='bx bxl-linkedin'></i></a></li>
                                    <li><a href='#'><i class='bx bxl-instagram'></i></a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </Card.Body>
                    <Card.Footer>
                        <Link className='btn btn-sm btn-info'to="/">All Devs</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Profile
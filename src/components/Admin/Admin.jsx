import React from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Admin.css'


const Admin = () => {
    return (
      <>
      <Container className='my-5'>
          <Row className='justify-content-center'>
              <Col md ={10}>
                  <Card className='shadow'>
                    <Card.Header className='d-flex justify-content-between'>
                        <h2 >All developers</h2>
                        <Link to="/add-devs" className='btn btn-sm btn-primary'>Add new devs</Link>
                    </Card.Header>
                      <Card.Body>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Skill</th>
                                    <th>Photo</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Minguk</td>
                                    <td>MERN</td>
                                    <td>Cell</td>
                                    <td><img src="" alt="" /></td>
                                    <td>
                                        <a className='btn btn-sm btn-info' href=""><i class='bx bx-show'></i></a> &nbsp;
                                        <a className='btn btn-sm btn-warning' href=""><i class='bx bx-edit'></i></a> &nbsp;
                                        <a className='btn btn-sm btn-danger' href=""><i class='bx bx-trash'></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                       
                          
                          
                      </Card.Body>
                      
                  </Card>
              </Col>
          </Row>
      </Container>
      </>
    )
  }
  
  export default Admin;
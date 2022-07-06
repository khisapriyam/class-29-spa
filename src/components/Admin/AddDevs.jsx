import React from 'react'
import { Button, Card, Col, Container, Form, Row, } from 'react-bootstrap'
import './Admin.css'


const AddDevs = () => {
    return (
      <>
      <Container className='my-5'>
          <Row className='justify-content-center'>
              <Col md ={6}>
                  <Card className='shadow'>
                    <Card.Header>
                        <h3>Add new devs</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <div className="my-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </div>

                            <div className="my-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </div>

                            <div className="my-3">
                                <Form.Label>Cell</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </div>

                            <div className="my-3">
                                <Form.Label>Skill</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </div>

                            <div className="my-3">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </div>

                            <div className="my-3">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </div>

                            <div className="my-3">
                                <Form.Label>Linkedin</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </div>

                            <div className="my-3">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </div>
                            <div className="my-3">
                                <Form.Label></Form.Label>
                                <Button type='submit' className='btn btn-primary w-100'>Add new devs</Button>
                            </div>
                        </Form>
                    </Card.Body>

                      <Card.Footer>
                        <a href="#">All Devs</a>
                      </Card.Footer>
                      
                  </Card>
              </Col>
          </Row>
      </Container>
      </>
    )
  }
  
  export default AddDevs;
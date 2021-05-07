import React from 'react';
import Layout from '../../components/Layout';
import {Form, Col, Row, Button, Container} from 'react-bootstrap';
import Input from '../../components/UI/Input/index';

const Signup = (props) =>{
    return(
        <>
            <Layout>
            <Container>
               <Row style={{marginTop:'50px'}}>
                   <Col md={{span:6, offset:3}}>
                   <Form>
                       <Row>
                           <Col md={6}>
                            <Input 
                                controlId="formBasicEmail" 
                                label="First Name" 
                                type="text"
                                
                                onChange={() => {}}
                                placeholder="Enter your first name"/>
                           </Col>

                           <Col md={6}>
                            <Input 
                                constrolId="formBasicEmail" 
                                label="Last Name" 
                                type="text"
                                
                                placeholder="Enter Your last name"
                                onChange= {() => {}}
                                />
                           </Col>
                           
                       </Row>
                    <Input 
                        controlId="formBasicEmail" 
                        label="Email Address" 
                        type="email" 
                        
                        placeholder="Enter your Email" 
                        onChange={()=>{}}
                        />

                    <Input 
                        controlId="formBasicPassword"
                        label="Password"
                        type="password"
                        
                        placeholder="Enter your password"
                        onChange={() =>{}}
                        />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                   
                   </Col>
               </Row>
            </Container>
</Layout>
        </>
    )
}

export default Signup;
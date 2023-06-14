import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';


function Login() {

    const handleClick=()=>{

    }
  
    const handleChange=()=>{
  
    }
  return (
    <>
     <section>
       <Container>
        <Row>
          <Col lg='10' className='m-auto'>
          <div className='login_container d-flex justify-content-between'>
            <div className="login_img">
              {/* <img src={loginimg} alt="" /> */}
            </div>

            <div className="login_form">
              <div className="user">
                {/* <img src={usericon} alt="" /> */}
              </div>
              <h2>Register</h2>

              <Form onSubmit={handleClick}>
              <FormGroup>
                  <input type="text" placeholder='Username' id='username' required onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                  <input type="email" placeholder='Email' id='email' required onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                  <input type="password" placeholder='Password' id='password' required onChange={handleChange}/>
                </FormGroup>

                <Button className='btn secondary_btn auth_btn' type='submit' color="primary">Create Account</Button>

              </Form>

              <p>Already have an account? <Link to={'/'}>Login</Link></p>

            </div>

          </div>
          </Col>
        </Row>
       </Container>
    </section>    
    </>
  )
}

export default Login
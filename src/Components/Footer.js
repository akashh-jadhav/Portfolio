import React from 'react'
import { BsFacebook, BsLinkedin, BsInstagram, BsGithub} from "react-icons/bs";
import {MdEmail} from "react-icons/md"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
            <footer className='myFooter' id='footer'>
                <Container>
                   <Row>
                        <Col>
                            <h3>Contact us :- </h3>
                            <ul className='socialIconsList'>
                                 <li>
                                     <a rel="noreferrer" href="mailto:dr.er.akashjadhav1997@gmail.com" target="_blank">
                                          <MdEmail size={30} style={{ fill: 'black' }}/>
                                      </a>
                                  </li>
                                <li>
                                    <a rel="noreferrer" href="/" target="_blank">
                                        <BsFacebook size={30} style={{ fill: 'black' }}/>
                                    </a>
                                </li>
                                <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/akashh-jadhav-fed/" target="_blank">
                                <BsLinkedin size={30} style={{ fill: 'black' }}/>
                            </a>
                        </li>
                                <li>
                            <a rel="noreferrer" href="https://www.instagram.com/akashh.jadhav/" target="_blank">
                                <BsInstagram size={30} style={{ fill: 'black' }}/>
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://github.com/akashh-jadhav" target="_blank">
                                <BsGithub size={30} style={{ fill: 'black' }}/>
                            </a>
                        </li>
                            </ul>
                            
                        </Col>
                        <Col>
                            <div>
                                <small>© Developed and Designed  by Akash Jadhav (FED).</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
  )
}

export default Footer
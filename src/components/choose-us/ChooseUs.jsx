import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './choose-us.css'
import pastaImg from '../../assets/images/pasta.png'

const ChooseUs = () => {
  return <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <img src={pastaImg} alt="" className='w-100' />
                </Col>

                <Col lg='6'>
                    <div className="choose__content">
                        <h4>Who we are?</h4>
                        <h2>Take a look at the benefits we offer you</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta minima debitis itaque autem similique explicabo.</p>
                    </div>
                            <div className="features">
                                <div className="feature1">
                                    <div className="single__feature">
                                        <span><i class="ri-truck-line"></i></span>
                                        <h6>Free Home Delivery</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur?</p>
                                    </div>
                                </div>
                            </div>

                </Col>
            </Row>
        </Container>
  </section>
}

export default ChooseUs
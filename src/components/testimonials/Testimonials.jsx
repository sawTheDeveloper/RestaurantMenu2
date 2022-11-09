import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './testimonial.css'
import testimonialImg from '../../assets/images/review1.png'
import Slider from 'react-slick'

const Testimonials = () => {


    const settings = {
        infinite:true
    }
  return ( 
       <section>
        <Container>
            <Row>
                <Col lg='8' className='m-auto'>
                    <div className="slider__wrapper d-flex align-items-center gap-5">
                        <div className="slider__content w-50">
                        <h2 className='mb-4'>What our customers our saying</h2>
                    <Slider>
                       <div>
                        <div className="single__testimonial">
                            <p className="review__content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt illum inventore magnam iure est, nemo consectetur velit eos cum.
                            </p>

                                <h6>JohnDoe</h6>
                                <p>Job title</p>

                        </div>


                       </div>

                       <div>
                        <div className="single__testimonial">
                            <p className="review__content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt illum inventore magnam iure est, nemo consectetur velit eos cum.
                            </p>

                                <h6>JohnDoe</h6>
                                <p>Job title</p>

                      
                       </div>
                    </div>
                    </Slider>
                        
                        <div className="slider__img">
                        <img src={testimonialImg} alt="" className='w-100' />
                        </div>



                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
  </section>
);
};

export default Testimonials;
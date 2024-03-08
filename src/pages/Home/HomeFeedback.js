import React from "react";
import Slider from "react-slick";
import Image from 'react-bootstrap/Image';
import ImageSample from '../../assets/images/image-sample.jpg';
import { Card, CardBody, Text, Center, CardFooter } from '@chakra-ui/react';
import  Container  from 'react-bootstrap/Container';
import ClientPhoto from '../../assets/images/user.png';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import LeftQuote from '../../assets/icons/bottom.png';
import RightQuote from '../../assets/icons/top.png';


function HomeFeedback() {
    const rawData = [
        { id: 1, logo: ClientPhoto, name: 'Mr.Wobin', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered There are many variations of passages' },
        { id: 2, logo: ClientPhoto, name: 'Mr.Wobin', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered There are many variations of passages' },
        { id: 3, logo: ClientPhoto, name: 'Mr.Wobin', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered There are many variations of passages' },
        { id: 4, logo: ClientPhoto, name: 'Mr.Wobin', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered There are many variations of passages' },

      ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "187px",
    slidesToShow: 2.23,
    speed: 500,
    autoplay: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerPadding: "37px",
          slidesToShow: 1,
          initialSlide: 1,
        }
      }, 
      
    ]
  };

  return (
    <Container className="container  mb-4 p-5" >
    <Center>
        <Text className="home_feedback_header">Our Clients Feedback</Text>
    </Center>
    <div className="slider-container">
      <Slider {...settings}>
        {rawData.map(item => (
          <div key={item.id} class="mb-5 mt-5">
            <div className="center-slide mt-1">
              <Card style={{borderWidth:'1px', borderColor:'#C4C8CB',backgroundColor:'#C4C8CB'}}>
                <div style={{marginTop:'40px'}}>
                    <Center>
                        <Image src={item.logo} style={{width:'60px',position:'absolute',marginTop:'40px'}}/>
                    </Center>
                    <div className="feedback-card" style={{backgroundColor:'transparent',marginTop:'30px',borderRadius:'30px 30px 5px 5px',color:'white'}}>
                        <Col >
                            <Row>
                                <Center style={{marginTop:'20px',fontWeight:'bold'}}>    
                                    <Text>{item.name}</Text>
                                </Center>
                            </Row>
                            <Row style={{padding:'10px 20px 17px 20px'}}>
                                <Image src={RightQuote} style={{width:'45px'}}/>
                            </Row>
                            <Row style={{padding:'0px 30px 0px 30px'}}>
                                <p style={{fontSize:'11px'}}>{item.description}</p>
                                <Row style={{display:'flex', justifyContent:'end',padding:'0px 0px 20px 0px',}}>
                                  <Image src={LeftQuote} style={{width:'45px'}}/>
                                </Row>
                            </Row>
                            
                          
                        </Col>
                        

                    </div>
                  
                </div>
              </Card>
            </div>
          </div>
        ))}
      
       
            
      </Slider>
    </div>
    </Container>
  );
}

export default HomeFeedback;

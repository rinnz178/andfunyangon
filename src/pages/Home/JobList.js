import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Text } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import ImageSample from '../../assets/images/image-sample.jpg';
import { Grid, GridItem } from '@chakra-ui/react'
import { motion } from "framer-motion";
import  Container  from 'react-bootstrap/Container';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import SeeMore from '../../assets/icons/right-arrow.png';
import Image  from 'react-bootstrap/Image';

const JobList = () => {
  return (
    <Container style={{marginTop:'40px'}} className="col-md-11 col-sm-11 py-1">
        <Center>
            <Text className="home_gallery_header">Job Listing</Text>
        </Center>
        
        <Row>
            <Grid 
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} 
                gap={{ base: 2, md: 5 }}
                >
                
                <GridItem>
                    <Card className="job_card" style={{backgroundColor:'transparent',color:'#C4C8CB',height:'15.7vh'}}>
                        <CardBody>
                            <Row>
                                <Col className="col-9">
                                    <div 
                                        style={{
                                                fontWeight:'bold',
                                                color:'white',
                                                marginLeft:'20px',
                                                marginBottom:'3px'
                                                }}>
                                        Web Developer
                                    </div>
                                    <ul style={{color:'white'}}>
                                        <li>
                                            PHP,Laravel,Html,Css,Javascript
                                        </li>
                                        <li>
                                            Mid-Level
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="col-3" style={{display:'flex',alignItems:'center'}}>
                                    <Button 
                                        style={{
                                                // fontWeight:'semi-bold',
                                                color:'#C4C8CB',
                                                marginLeft:'20px',
                                                marginBottom:'13px',
                                                height:'30px',
                                                fontSize:'15px',
                                                width:'90px',
                                                backgroundColor:'transparent'
                                                }}>
                                        <Image src={SeeMore} style={{width:'18px'}}/>
                                    </Button>
                                </Col>
                            </Row>
                            
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card className="job_card" style={{backgroundColor:'transparent',color:'#C4C8CB',height:'15.7vh'}}>
                        <CardBody>
                            <Row>
                                <Col className="col-9">
                                    <div 
                                        style={{
                                                fontWeight:'bold',
                                                color:'white',
                                                marginLeft:'20px',
                                                marginBottom:'3px'
                                                }}>
                                        Web Developer
                                    </div>
                                    <ul style={{color:'white'}}>
                                        <li>
                                            PHP,Laravel,Html,Css,Javascript
                                        </li>
                                        <li>
                                            Mid-Level
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="col-3" style={{display:'flex',alignItems:'center'}}>
                                    <Button 
                                        style={{
                                                // fontWeight:'semi-bold',
                                                color:'#C4C8CB',
                                                marginLeft:'20px',
                                                marginBottom:'13px',
                                                height:'30px',
                                                fontSize:'15px',
                                                width:'90px',
                                                backgroundColor:'transparent'
                                                }}>
                                        <Image src={SeeMore} style={{width:'18px'}}/>
                                    </Button>
                                </Col>
                            </Row>
                            
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card className="job_card" style={{backgroundColor:'transparent',color:'#C4C8CB',height:'15.7vh'}}>
                        <CardBody>
                            <Row>
                                <Col className="col-9">
                                    <div 
                                        style={{
                                                fontWeight:'bold',
                                                color:'white',
                                                marginLeft:'20px',
                                                marginBottom:'3px'
                                                }}>
                                        Web Developer
                                    </div>
                                    <ul style={{color:'white'}}>
                                        <li>
                                            PHP,Laravel,Html,Css,Javascript
                                        </li>
                                        <li>
                                            Mid-Level
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="col-3" style={{display:'flex',alignItems:'center'}}>
                                    <Button 
                                        style={{
                                                // fontWeight:'semi-bold',
                                                color:'#C4C8CB',
                                                marginLeft:'20px',
                                                marginBottom:'13px',
                                                height:'30px',
                                                fontSize:'15px',
                                                width:'90px',
                                                backgroundColor:'transparent'
                                                }}>
                                        <Image src={SeeMore} style={{width:'18px'}}/>
                                    </Button>
                                </Col>
                            </Row>
                            
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card className="job_card" style={{backgroundColor:'transparent',color:'#C4C8CB',height:'15.7vh'}}>
                        <CardBody>
                            <Row>
                                <Col className="col-9">
                                    <div 
                                        style={{
                                                fontWeight:'bold',
                                                color:'white',
                                                marginLeft:'20px',
                                                marginBottom:'3px'
                                                }}>
                                        Web Developer
                                    </div>
                                    <ul style={{color:'white'}}>
                                        <li>
                                            PHP,Laravel,Html,Css,Javascript
                                        </li>
                                        <li>
                                            Mid-Level
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="col-3" style={{display:'flex',alignItems:'center'}}>
                                    <Button 
                                        style={{
                                                // fontWeight:'semi-bold',
                                                color:'#C4C8CB',
                                                marginLeft:'20px',
                                                marginBottom:'13px',
                                                height:'30px',
                                                fontSize:'15px',
                                                width:'90px',
                                                backgroundColor:'transparent'
                                                }}>
                                        <Image src={SeeMore} style={{width:'18px'}}/>
                                    </Button>
                                </Col>
                            </Row>
                            
                        </CardBody>
                    </Card>
                </GridItem>
                
            </Grid>
        </Row>
        
    </Container>
  )
}

export default JobList
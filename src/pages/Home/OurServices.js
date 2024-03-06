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
import WebServices from '../../assets/icons/browser.png'
import CAD from '../../assets/icons/cad.png'
import PS from '../../assets/icons/photoshop.png'
import Video from '../../assets/icons/video-editing.png'
import DataEntry from '../../assets/icons/document.png'
import DataAnno from '../../assets/icons/file-cabinet.png'

const data = [
    { id: 1, imageSrc: WebServices, text: "Web Solution" },
    { id: 2, imageSrc: DataEntry, text: "Efficient Data Entry" },
    { id: 2, imageSrc: DataAnno, text: "Data Annotation" },
    { id: 2, imageSrc: CAD, text: "AutoCAD" },
    { id: 2, imageSrc: PS, text: "Creative Excellence" },
    { id: 2, imageSrc: Video, text: "Video Editing" },


    // Add more data objects for the remaining items
  ];


const OurServices = () => {

    const renderGridItems = () => {
        return data.map(item => (
          <GridItem key={item.id}>
            <Card className="our_services_card" style={{ backgroundColor: '#C4C8CB', color: '#030328', height: '13.7vh' }}>
              <CardBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', marginTop: '6px' }}>
                <Col>
                  <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={item.imageSrc} style={{ width: '57px' }} />
                  </Row>
                  <Text style={{ marginTop: '5px',fontSize:'15px' }}>
                    {item.text}
                  </Text>
                </Col>
              </CardBody>
            </Card>
          </GridItem>
        ));
      };
  return (
    <Container style={{marginTop:'0px'}} className="col-md-11 col-sm-11 py-1">
        <Center>
            <Text className="home_gallery_header">Our Services</Text>
        </Center>
        
        <Row>
            <Grid 
                templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }} 
                gap={{ base: 2, md: 2 }}
                >
                
                {/* <GridItem>
                    <Card className="our_services_card" style={{ backgroundColor: '#C4C8CB', color: '#030328', height: '13.7vh', }}>
                            <CardBody style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',fontWeight:'bold',marginTop:'6px'}}>
                                <Col>
                                    <Row style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                                        <Image src={WebServices} style={{width:'57px'}}/>
                                    </Row>
                                    <Text style={{marginTop:'5px'}}>
                                        Web Solution
                                    </Text>
                                </Col>
                            </CardBody>
                        </Card>
                </GridItem> */}
                {renderGridItems()}
                
            </Grid>
        </Row>
        
    </Container>
  )
}

export default OurServices
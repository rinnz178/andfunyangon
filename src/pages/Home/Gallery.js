import React,{useRef} from 'react'
import { Row, Col } from "react-bootstrap";
import { Text } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Image } from 'antd';
import ImageSample from '../../assets/images/image-sample.jpg';
import { Grid, GridItem } from '@chakra-ui/react'
import { motion } from "framer-motion";
import  Container  from 'react-bootstrap/Container';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
    const scrollRef = useRef(null)
    const { ref, inView } = useInView({
        triggerOnce: true, // This will trigger the animation only once
        threshold: 0.6, // This specifies the percentage of the element's visibility needed to trigger the animation
    });
  return (
    <Container style={{marginTop:'40px'}} className="col-md-11 col-sm-11 py-1">
        <Center>
            <Text className="home_gallery_header">Company Celebration Gallery </Text>
        </Center>
        
        <Row>
            <Grid 
                templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} 
                gap={{ base: 2, md: 5 }}
                >
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.,
                        ease: [0, 0.9, 0.9, 1.01]
                    }}
                    >
                    <GridItem>
                        <Image 
                            src={ImageSample} 
                            w='100%' 
                            style={{ borderRadius: '10px', marginBottom: '0' }}
                        />
                    </GridItem>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.,
                        ease: [0, 0.9, 0.9, 1.01]
                    }}
                    >
                    <GridItem>
                        <Image 
                            src={ImageSample} 
                            w='100%' 
                            style={{ borderRadius: '10px', marginBottom: '0' }}
                        />
                    </GridItem>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.,
                        ease: [0, 0.9, 0.9, 1.01]
                    }}
                    >
                    <GridItem>
                        <Image 
                            src={ImageSample} 
                            w='100%' 
                            style={{ borderRadius: '10px', marginBottom: '0' }}
                        />
                    </GridItem>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.,
                        ease: [0, 0.9, 0.9, 1.01]
                    }}
                    >
                    <GridItem>
                        <Image 
                            src={ImageSample} 
                            w='100%' 
                            style={{ borderRadius: '10px', marginBottom: '0' }}
                        />
                    </GridItem>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.,
                        ease: [0, 0.9, 0.9, 1.01]
                    }}
                    >
                    <GridItem>
                        <Image 
                            src={ImageSample} 
                            w='100%' 
                            style={{ borderRadius: '10px', marginBottom: '0' }}
                        />
                    </GridItem>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.,
                        ease: [0, 0.9, 0.9, 1.01]
                    }}
                    >
                    <GridItem>
                        <Image 
                            src={ImageSample} 
                            w='100%' 
                            style={{ borderRadius: '10px', marginBottom: '0' }}
                        />
                    </GridItem>
                </motion.div>               
            </Grid>
        </Row>
        
    </Container>
  )
}

export default Gallery
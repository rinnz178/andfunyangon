import React,{useState} from "react";
import NavMenu from "../../components/NavMenu";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Text,Button,Center } from "@chakra-ui/react";
import CustomButton from '../../components/CustomButton';
import Carousel from '../../components/Carousel';
import './style.css'
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import Gallery from './Gallery';
import JobList from './JobList';
import Clock from './Clock';
import OurServices from './OurServices';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    borderRadius: '20px',
    padding: '20px',
    color: 'white',
    backgroundColor: isHovered ? '#ff5756' : '#e32a29',
    transition: 'background-color 0.3s ease',
  };

  return (
    <Container  container style={{ height: '300vh', padding: 10 }}>
        <Row className="home_banner_content" >
          <Col xs={12} sm={12} md={{ order: "last" }} lg>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                >
              <Carousel/>
            </motion.div>
          </Col>
         
          <Col 
              className="home_heading_text"
              xs={12} 
              sm={12}
              md={{margin:'20px'}} 
              lg         
              >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              >
              <Center flexDirection="column" textAlign="center">
                <Text 
                  className="heading rainbow-text"
                  textAlign="center"
                  // color="#C4C8CB"
                  fontWeight="700"
                  style={{ textTransform: 'uppercase' }}
                  >
                  To The <span style={{color:'#e32a29'}}> Future </span> <br className="next_line"/>With IT<span style={{color:'#e32a29'}}> Technology</span>
                </Text>
                <Text
                  fontSize="17px" 
                  textAlign="center"
                  color="#C4C8CB"
                  fontWeight="400"
                  className="body_text"
                  >
                  It is a long established fact that a reader will be distracted by 
                  the readable content of a page when looking at its layout.
                </Text>
                <CustomButton text="Contact Us"/>
              </Center>
            </motion.div>

          </Col>
        </Row>
        <OurServices/>
        <Gallery/>
        <JobList/>
             
      <FloatButton icon={<QuestionCircleOutlined />} style={{right: 24,height:'50px',width:'50px',bottom:'110px'}}/>
      <FloatButton.BackTop 
        type='danger'
        icon={<CaretUpOutlined fontSize="80px"/>} 
        style={{right: 24,height:'50px',width:'50px',backgroundColor:'#e32a29',color:'white'}} 
        />


    </Container>
  );
};

export default Home;

// CustomButton.js
import React,{useState,useRef} from 'react';
import { Button } from '@chakra-ui/react';

const CustomButton = ({ text }) => {
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef(null);

    const handleMouseEnter = (event) => {
        setIsHovered(true);
        setHoverPosition({
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const getDistance = (x1, y1, x2, y2) => {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const calculateGradient = () => {
        if (!buttonRef.current) return 0;
        
        const distance = getDistance(
        hoverPosition.x,
        hoverPosition.y,
        0.8 * buttonRef.current.offsetWidth,
        0.8 * buttonRef.current.offsetHeight
        );
        const gradientValue = distance / (0.5 * buttonRef.current.offsetWidth);
        return gradientValue;
    };

    const buttonStyle = {
        borderRadius: '20px',
        padding: '20px',
        color: 'white',
        backgroundColor: isHovered ? `rgba(190, 70, 76, ${calculateGradient()})` : '#e32a29',
        transition: 'background-color 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <Button
        ref={buttonRef}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        {text}
        </Button>
    );
    };
export default CustomButton;

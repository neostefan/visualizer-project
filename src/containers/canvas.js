import React from 'react';
import styled from 'styled-components';

import  codes from '../colors/color';

const Styles = styled.div`
    width: 100%;
    height: 70%;
    border: .5px solid ${codes.color};
    background-color: ${codes.background};
`
const Canvas = () => {
    let canvasRef = React.useRef(null);
    let containerRef = React.useRef(null);

    React.useEffect(() => {
        let canvas = canvasRef.current;
        let container = containerRef.current;
        let containerDet = container.getBoundingClientRect();
        let context = canvas.getContext('2d');
        console.log(containerDet);
        canvas.width = containerDet.width;
        canvas.height = containerDet.height;
    }, []);

    return (
        <Styles ref={containerRef}>
            <canvas ref={canvasRef}/>
        </Styles>
    )
}

export default Canvas;


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
    return (
        <Styles>
            <canvas/>
        </Styles>
    )
}

export default Canvas;


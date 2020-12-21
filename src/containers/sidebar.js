import React from 'react';
import styled from 'styled-components';

import codes from '../colors/color';

const Styles = styled.div`
    height: 100%;
    width: 20%;
    background: ${codes.background};
    border: .5px solid ${codes.color};
`

const Sidebar = ({text}) => {
    return (
        <Styles>
            {text}
        </Styles>
    )
}

export default Sidebar;
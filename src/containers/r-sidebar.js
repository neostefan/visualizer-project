import React from 'react';
import styled from 'styled-components';

import codes from '../colors/color';

const Styles = styled.div`
    height: 100%;
    width: 20%;
    background: ${codes.background};
    border: .5px solid ${codes.color};
`

const Rsidebar = () => {
    return (
        <Styles>
            <div>
                <select>
                    <option>Rectangle</option>
                    <option>None</option>
                </select>
            </div>
        </Styles>
    )
}

export default Rsidebar;
import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
    const [istoggleOn, setToggleOn] = useState(false);

    const handleToggleOn = () => {
        setToggleOn(!istoggleOn);
    };

    return (
        <div>
            <ToggleContainer onClick={handleToggleOn}>
                <div className={
                    `toggleContainer ${istoggleOn ? 'checked' : ''}`
                } />
                <div className={
                    `toggleCircle ${istoggleOn ? 'checked' : ''}`
                } />
            </ToggleContainer>
        </div>
    );
};

export default Toggle;

const ToggleContainer = styled.section`
 position: relative;
  margin-top: 8rem;
  left: 45%;
> .toggleContainer {
     width: 50px;
     background-color: red;
 }
`
import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [isToggleOn, setToggleOn] = useState(false);

  const handleToggleOn = () => {
    setToggleOn(!isToggleOn);
  };

  return (
    <div>
      <ToggleContainer>
        <div onClick={handleToggleOn}>
          <div
            className={`toggleContainer ${isToggleOn ? "checked" : ""}`}
          ></div>
          <div className={`toggleCircle ${isToggleOn ? "checked" : ""}`}></div>
        </div>
      </ToggleContainer>
      <Title>{isToggleOn ? "Toggle is On" : "Toggle is Off"}</Title>
    </div>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  top: 100px;
  /* justify-content: center; */
  left: 48%;

  .toggleContainer {
    width: 110px;
    height: 50px;
    border-radius: 30px;
    background-color: #8b8b8b;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .toggleContainer.checked {
    background-color: #e9967a;
    transition: all 0.2s linear;
  }
  .toggleCircle {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    transition: all 0.2s;
    /* border: 1px solid black; */
  }
  .toggleCircle.checked {
    transition: all 0.2s;
    left: 65px;
  }
`;

const Title = styled.div`
  position: relative;
  display: flex;
  top: 120px;
  /* justify-content: center; */
  left: 48.7%;
`;

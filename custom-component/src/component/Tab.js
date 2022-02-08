import React, { useState } from "react";
import styled from "styled-components";

const Tab = () => {
  const [isClickTab, setIsClickTab] = useState(0);

  const menuArr = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ];

  const handleClickTab = (index) => {
    setIsClickTab(index);
  };

  return (
    <>
    <TabContainer>
      <TabMenu>
        {menuArr.map((el, index) => {
          return (
            <li
              key={index}
              className={isClickTab === index ? "submenu clicked" : "submenu"}
              onClick={() => handleClickTab(index)}
            >
              {el.name}
            </li>
          );
        })}
      </TabMenu>
      <Title>{menuArr[isClickTab].content}</Title>
      </TabContainer>
    </>
  );
};

export default Tab;

const TabContainer = styled.section`
position: relative;
display: flex;
right: -50px;
top: 400px;
margin: auto;
justify-content: center;
`

const TabMenu = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 59px;
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  flex-direction: row;
  list-style: none;
  margin-bottom: 6rem;
  .submenu {
    width: 100%;
    padding: 20px 10px;
    text-align: center;
    cursor: pointer;
  }

  .clicked {
    background-color: #e9967a;
    color: white;
    transition: all 0.5s;
  }
`;

const Title = styled.div`
  position: relative;
  top: 100px;
  right: 250px;
  text-align: center;
`;

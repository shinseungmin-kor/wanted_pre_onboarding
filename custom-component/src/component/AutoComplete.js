import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AutoComplete = () => {
  const autoArr = ["apple", "banana", "car", "draft"];

  const [isfindText, setIsFindText] = useState(false);
  const [isInputValue, setInputValue] = useState("");
  const [isAutoComplete, setIsAutoComplete] = useState(autoArr);

  const handleInputChange = (event) => {
    // console.log(event.target.value);

    const filtered = autoArr.filter((el) =>
      el.toLowerCase().includes(event.target.value)
    );
    // console.log(filtered)

    setInputValue(event.target.value);
    setIsAutoComplete(filtered);
    setIsFindText(true);
  };

  const handleDropDown = (event) => {
    setInputValue(event);
  };

  const handleDeleteBtn = () => {
    setInputValue("");
  };

  useEffect(() => {
    if (isInputValue === "") {
      setIsFindText(false);
    }
  }, [isInputValue]);

  return (
    <>
      <AutoCompleteContainer>
        <InputContainer>
          <input
            onChange={(event) => handleInputChange(event)}
            value={isInputValue}
          />
          <div className="xBox" onClick={handleDeleteBtn}>
            x
          </div>
        </InputContainer>
        {isfindText ? (
          <DropDown
            options={isAutoComplete}
            dropDownText={(el) => handleDropDown(el)}
          />
        ) : null}
      </AutoCompleteContainer>
    </>
  );
};

export const DropDown = ({ options, dropDownText }) => {
  return (
    <DropDownContainer>
      {options.map((el) => {
        return (
          <li
            onClick={() => {
              dropDownText(el);
            }}
          >
            {el}
          </li>
        );
      })}
    </DropDownContainer>
  );
};
export default AutoComplete;

const AutoCompleteContainer = styled.section`
  position: relative;
  width: 100%;
  top: 550px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 400px;
  margin: auto;
  margin-top: 8rem;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  z-index: 3;
  &:focus-within {
    box-shadow: 0 3px 6px lightgray;
  }
  input {
    flex: 1 0;
    border: none;
    outline: none;
    font-size: 20px;
  }
  .xBox {
    width: 10px;
    cursor: pointer;
  }
`;

const DropDownContainer = styled.div`
  display: block;
  width: 430px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 3px 6px lightgray;
  z-index: 2;

  li {
    padding: 0 1rem;
    :hover {
      cursor: pointer;
      background-color: #e9967a;
      color: white;
    }
  }
`;

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

export const SetInput = ({ value, handleChange = (value) => value }) => {
  const inputRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleValueClick = () => {
    setIsEdit(true);
  };

  const handleBlur = () => {
    setIsEdit(false);
    handleChange(newValue);
  };

  const handleValueChange = (e) => {
    setNewValue(e.target.value);
  };

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  return (
    <InputBox>
      {isEdit ? (
        <InputEdit
          type="text"
          value={newValue}
          ref={inputRef}
          onBlur={handleBlur}
          onChange={handleValueChange}
        />
      ) : (
        <div onClick={handleValueClick}>{newValue}</div>
      )}
    </InputBox>
  );
};

const cache = {
  name: "신승민",
  age: 30,
};

const ClickToEdit = () => {
  const [isName, setIsName] = useState(cache.name);
  const [isAge, setIsAge] = useState(cache.age);

  return (
    <>
      <InputContainer>
        <InputView>
          <label>이름</label>
          <SetInput
            value={isName}
            handleChange={(e) => setIsName(e)}
          />
        </InputView>
        <InputView>
          <label>나이</label>
          <SetInput
            value={isAge}
            handleChange={(e) => setIsAge(e)}
          />
        </InputView>
        <InputView>
          <div className="view">
            이름 {isName} 나이 {isAge}
          </div>
        </InputView>
      </InputContainer>
    </>
  );
};

export default ClickToEdit;

const InputContainer = styled.section`
  position: relative;
  width: auto;
  /* left: 460px; */
  top: 650px;
  margin: auto;
 
  /* justify-content: center; */
`;

const InputView = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 3rem;

  .view {
    margin-top: 3rem;
  }
`;

const InputBox = styled.div`
  text-align: center;
  display: inline-block;
  align-items: center;
  width: 150px;
  height: 30px;
  border: 1px dashed gray;
  border-radius: 10px;
  margin-left: 1rem;
`;

const InputEdit = styled.input`
  text-align: center;
  display: inline-block;
  align-items: center;
  width: 150px;
  height: 30px;
  outline: none;
  border: none;
  background: none;
`;

import React, { useState } from "react";
import styled from "styled-components";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={handelModalOpen}>
          {isModalOpen ? "Opened" : "Click"}
        </ModalBtn>
        {isModalOpen ? (
          <>
            <OnModal>
              <ModalWindow>
                <div className="closedBox" onClick={handelModalOpen}>
                  x
                </div>
                <div className="text">
                  Congraturation.
                  <br />
                  Modal is Open!!
                </div>
              </ModalWindow>
            </OnModal>
          </>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  top: 250px;
`;

const ModalBtn = styled.div`
  display: flex;
  width: 110px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #e9967a;
  font-size: 20px;
  cursor: pointer;
`;

const OnModal = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  align-items: center;
  justify-items: center;
`;

const ModalWindow = styled.div`
  border-radius: 10px;
  background-color: white;
  width: 300px;
  height: 120px;

  .closedBox {
    margin-top: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  .text {
    margin-top: 15px;
    font-size: 20px;
  }
`;

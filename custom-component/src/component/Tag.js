import React, { useState } from "react";
import styled from "styled-components";

const Tag = () => {
  const Tags = ["apple", "banana"];
  const [isTags, setIsTags] = useState(Tags);

  const handleAddTags = (event) => {
    if (event.target.value === "") {
      return;
    }else {
      setIsTags(isTags.concat(event.target.value));
    }
    event.target.value = "";
  };

  const handleRemoveTags = (indexToRemove) => {
    setIsTags(isTags.filter((el, index) => index !== indexToRemove));
  };

  return (
    <>
      <TagsList>
        <ul className="tags">
          {isTags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tagName">{tag}</span>
              <span className="xBox" onClick={() => handleRemoveTags(index)}>
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          className="inputTag"
          type="text"
          onKeyUp={(event) => {
            if (event.key !== "Enter") {
              return;
            } else {
              handleAddTags(event);
            }
          }}
          placeholder="Press enter to add tags"
        />
      </TagsList>
    </>
  );
};

export default Tag;

const TagsList = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  top: 500px;
  /* left: 40px; */
  margin: 1rem auto;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  padding: 0 8px;
  border: 1px solid gray;
  border-radius: 6px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #e9967a;
      .xBox {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: black;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid #e9967a;
  }
`;

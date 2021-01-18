import React, { useState } from "react";
import styled from "styled-components";
const images = [
  "photo1.png",
  "photo2.png",
  "photo3.png",
  "photo4.png",
  "photo5.png",
  "photo6.png"
];

const Slider = (props) => {
  const firstIndex = images.indexOf(props.first);
  const [index, setIndex] = useState(firstIndex); 
  const slideRight = () => {
    setIndex((index + 1) % images.length); 
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); 
    } else {
      setIndex(nextIndex);
    }
  };
  return (
    <Wrapper>
      <Button onClick={slideLeft}>{"<"}</Button>
      <img src={images[index]} alt={index} height="200" width="300" />
      <Button onClick={slideRight}>{">"}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 20px;
  width: 20px;
  background: none;
  border-radius: 50%;
  cursor: pointer;
`;
export default Slider;
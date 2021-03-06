import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyText>Add Todo</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;


const EmptyText = styled.Text`
  color: white;
  margin-top: 30px;
  font-size: 30px;
`;

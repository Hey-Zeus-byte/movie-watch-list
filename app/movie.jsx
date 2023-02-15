"use client";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieImage = styled.img`
  display: block;
  width: 200px;
  height: 200px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

export default function Movie({ id, title, image }) {
  return (
    <Container>
      <MovieContainer key={id}>
        <Title>{title}</Title>
        <MovieImage src={image} />
      </MovieContainer>
    </Container>
  );
}

import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2002</Title>
        <SubTitle>I love GraphQL</SubTitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
    </Container>
  );
};

export default Home;

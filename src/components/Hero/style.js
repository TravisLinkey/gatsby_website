import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  > div:first-child {
    height: 100%;
  }
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  > div {
    margin: auto;
    padding: 16px;
    max-width: 100hw;
    text-align: center;
    line-height: 2.5;
  }
`;

export const Heading = styled.div`
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  verticle-align: top;
  margin-bottom: 10px;
  color: white;
`;

export const SubHeading = styled.div`
  font-size: 40px;
  font-weight: bold;
  max-width: 500px;
  margin: 0 auto;
  color: #46d4aa;
`;

export const Info = styled.div`
  color: white;
  font-size: 20px;
`;

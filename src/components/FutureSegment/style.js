import styled from "styled-components";

export const FutureSegmentWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  color: white;
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  > div {
    text-align: center;
    line-height: 3;
  }
`;

export const Heading = styled.div`
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
  color: white;
`;

export const SubHeading = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const ImageSegment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

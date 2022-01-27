import styled from "styled-components";

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Post = styled.div`
  margin: 20px 0;
  a {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Pagination = styled.div`
  text-align: center;
  width: 5%;
  margin: auto auto auto auto;
  a {
    padding: 20px;
    background-color: #ddd;
    transition: background-color 0.3s;
  }
  a:hover {
    background-color: #46d4aa;
  }
  a.visited {
    background-color: red;
  }
`;

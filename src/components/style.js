import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 60%;
  margin: 20px auto;
  display: block;
  text-align: center;
  vertical-align: middle;
  justify-items: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const MembershipWrapper = styled.div`
  width: 60%;
  margin: 20px auto auto auto;
  display: block;
  text-align: center;
  vertical-align: middle;
  justify-items: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  h3 {
    color: grey;
  }
`;

export const LabelWrapper = styled.div`
  margin: auto auto 20px auto;
  label {
    font: monospace;
    font-weight: 700;
  }
  label input {
    vertical-align: middle;
    margin: auto 20px;
  }
  label textarea {
    vertical-align: top;
    margin: auto 20px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #46d4aa; /* Green */
  border-radius: 4px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  width: 20%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px auto;
  &:active {
    transform: scale(0.70);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }

  &:hover span {
    padding-right: 25px;
  }
  
  &:hover span:after {
      opacity: 1;
      right: 0;
  }
}
`;

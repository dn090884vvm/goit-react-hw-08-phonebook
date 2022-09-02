import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin-top: 10px;

  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;
  border: none;
  background-color: #889132;
  font-weight: 700;
`;

export const LoginWrapper = styled.section`
  width: 500px;
  height: auto;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  box-shadow: 19px 27px 67px 13px rgba(0, 0, 0, 0.57);
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

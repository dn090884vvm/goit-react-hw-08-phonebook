import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
`;

export const Wrapper = styled.section`
  width: 600px;
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

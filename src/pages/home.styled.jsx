import styled from 'styled-components';

export const HomeWrapper = styled.section`
  width: 800px;
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

export const Section = styled.section`
  margin: 30px auto;
`;

export const Header2 = styled.h2`
  margin: 20px auto;
  text-align: center;
`;

export const Suggest = styled.p`
  margin: 20px auto;
  text-align: center;
  color: #2c8fc9;
`;

export const ListEl = styled.ul`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const List = styled.ul`
  margin-bottom: 30px;
`;

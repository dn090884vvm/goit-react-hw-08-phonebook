import styled from 'styled-components';

export const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;
  border: none;
  background-color: #889132;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  /* margin-bottom: 10px; */
  /* display: inline-flexbox; */
  /* margin-left: 15px; */
`;

export const DataWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

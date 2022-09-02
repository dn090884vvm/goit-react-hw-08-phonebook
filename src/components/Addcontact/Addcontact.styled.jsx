import styled from 'styled-components';

export const Button = styled.button`
  display: block;

  max-width: 100px;

  margin: 20px auto;

  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;
  border: none;
  background-color: #889132;
  font-weight: 700;
`;

export const FormParagraph = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const AddContactWrapper = styled.section`
  width: 300px;
  height: auto;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  box-shadow: 19px 27px 67px 13px rgba(0, 0, 0, 0.57);
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

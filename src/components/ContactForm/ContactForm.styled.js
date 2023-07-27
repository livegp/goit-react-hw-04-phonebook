import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 10px;
`;

export const List = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  text-align: left;
  margin: 0 0 10px;

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`;

export const Btn = styled.button`
  background-color: #dfe3ee;
  color: #3b5998;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

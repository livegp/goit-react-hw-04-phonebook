import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;

  labael {
    text-align: left;
  }

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`;

export default Form;

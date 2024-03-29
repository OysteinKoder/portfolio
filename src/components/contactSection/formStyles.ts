import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  text-align: left;
`;

export const StyledInput = styled.input`
  height: 2rem;
  border-radius: 5px;
  border: none;
  padding: 0 0.5rem;
`;

export const StyledTextArea = styled.textarea`
  height: 10rem;
  border-radius: 5px;
  border: none;
  padding: 0 0.5rem;
`;

export const StyledInputSend = styled.input`
  height: 2rem;
  border-radius: 5px;
  border: none;
  width: 5rem;
  background-color: field;
  color: rgb(134, 245, 145);
`;

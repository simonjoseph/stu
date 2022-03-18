import styled from "styled-components";

export default styled.input`
  transition: 0.3s ease border-color;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  padding: 0.25em;
  width: inherit;
  box-sizing: border-box;

  border: 1px solid
    ${props => (props.error ? "red" : "rgba(0, 0, 0, 0.1)")};

  &:focus {
    border-color: #6CAEDD;
  }
`;

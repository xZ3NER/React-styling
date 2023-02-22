import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : 'black'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background: ${props => props.invalid ? 'rgb(244, 144, 144)' : 'transparent'};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }  
`;

export default FormControl;

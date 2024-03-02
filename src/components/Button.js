
import styled from 'styled-components';
const Button = styled.button`
  background-color: #F4CE14;
  color: black;
  padding: 5px 15px;
  border-radius: 16px;
  outline: 0;
  border: 0;
  margin: 0px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  font-weight:bold;
  font-size:0.8rem;
  &:hover {
    background-color:#495E57 ;
    color: white;
  }
  &:active {
    background-color:#EE9972 ;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

// const Button = ({type='button',onClick,children,...rest}) => {
//     return(
//         <button type={type} onClick={onClick} {...rest} >
//             {children}
//         </button>
//     )
// }

export default Button;
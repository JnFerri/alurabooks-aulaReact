import styled from "styled-components";

const Imagem = styled.img`
width:${props => props.width || "100%"};
padding:${props => props.padding || "0px 0px" };
`
 
export default Imagem

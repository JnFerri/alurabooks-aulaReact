import styled from "styled-components";

const Titulo2 = styled.h2`
font-size:${props=> props.tamanhoFonte || '18px'};
color:${props => props.cor || '#000'};
border:${props => props.borda || '0px'}
padding:${props => props.padding || '0px 0px'}
;
`

export default Titulo2
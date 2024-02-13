import styled from "styled-components";

export const Titulo4 = styled.h3`
font-size:${props=> props.tamanhoFonte || '14px'};
color:${props => props.cor || '#000'};
border:${props => props.borda || '0px'}
padding:${props => props.padding || '0px 0px'}
;
`
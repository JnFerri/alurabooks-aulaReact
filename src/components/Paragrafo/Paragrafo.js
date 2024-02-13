import styled from "styled-components";

export const Paragrafo = styled.p`
color:${props => props.cor};
font-size:${props => props.tamanhoFonte};
padding:${props => props.padding};
background-color:${props => props.background}
`
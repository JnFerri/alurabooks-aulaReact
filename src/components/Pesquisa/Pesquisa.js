import styled from "styled-components";
import Input from "../Input/Input";

const PesquisaContainer = styled.section`
display:flex;
align-items: center;
width: 50%;
text-align:center;
flex-direction:column;
margin: 30px 25%
`

const Titulo = styled.h2`
    font-size:36px;
    font-weigth: bold;
    text-align:center;
    color: white;
`
const SubTitulo = styled.h3`
    font-size: 24px;
    text-align:center;
    color: white;
`

function Pesquisa(){
    return(
        <PesquisaContainer>
            <Titulo>Sabe por onde começar ?</Titulo>
            <SubTitulo>Procure o seu livro perfeito</SubTitulo>
            <Input placeholder="Procure por algum livro"></Input>
        </PesquisaContainer>
    )
}

export default Pesquisa
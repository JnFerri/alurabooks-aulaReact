import styled from "styled-components";
import Input from "../Input/Input";
import { useState } from "react";
import { livros } from "./livrosPesquisa";
import CardRecomenda from "../CardRecomenda/CardRecomenda.js";


const PesquisaContainer = styled.section`
display:flex;
align-items: center;
width: 50%;
text-align:center;
flex-direction:column;
margin: 30px 25%
`

const Titulo = styled.h2`
    font-size:38px;
    font-weigth: bold;
    text-align:center;
    color: white;
`
const SubTitulo = styled.h3`
    font-size: 24px;
    text-align:center;
    color: white;
`

const LivrosPesquisadosContainer = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:90%;
`

const livroContainer = styled.div`
    width: 25%;
    padding:20px;
`

function Pesquisa(){

    const [LivrosPesquisa, setLivrosPesquisa] = useState([])

    function fazPesquisa(valor){
        const texto = valor.target.value
                    const livrosPesquisados = livros.filter(livro => livro.nome.includes(texto))
                    setLivrosPesquisa(livrosPesquisados)
    }

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ?</Titulo>
            <SubTitulo>Procure o seu livro em nossa estante</SubTitulo>
            <Input placeholder="Procure por algum livro"
                onBlur={evento => fazPesquisa(evento)}
            ></Input>
        <LivrosPesquisadosContainer>
        {LivrosPesquisa.map(livro => (
                <livroContainer>
                    <p>{livro.nome}</p>
                    <img src={livro.src}></img>
                </livroContainer>
        )
        )}
       
        </LivrosPesquisadosContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa
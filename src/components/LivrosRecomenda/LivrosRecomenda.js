import styled from "styled-components";
import  livros  from "./livrosLancamentos";
import livroImagem from "../../images/livro2.png"
import Imagem from "../Imagem/Imagem";
import Titulo2 from "../Titulo2/Titulo2.js"
import CardRecomenda from "../CardRecomenda/CardRecomenda";

const RecomendaContainer = styled.section`
width: 100%;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
margin:20px 0;
`

const LivroLancamentosContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:80%;
margin:20px 0;

`

function LivrosLancamentos(){
    return(
        <RecomendaContainer>
            <Titulo2> Ultimos Lançamentos :</Titulo2>
            <LivroLancamentosContainer>
            {livros.map(livro => (
                <Imagem width={'10%'} src={livro.src}></Imagem>
            ))}
            </LivroLancamentosContainer>
            <CardRecomenda
            titulo={'Talvez você se interesse por '}
            subtitulo={'Angular 11'}
            descricao={'Um dos frameworks mais utilizados no mercado, torne-se um front end de sucesso !!!'}
            img={livroImagem}

            ></CardRecomenda>
        </RecomendaContainer>
    )

}

export default LivrosLancamentos
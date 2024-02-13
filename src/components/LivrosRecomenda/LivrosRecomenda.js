import styled from "styled-components";
import { livros } from "./livrosLancamentos";
import livroImagem from "../../images/livro2.png"
import Imagem from "../Imagem/Imagem";
import Titulo2 from "../Titulo2/Titulo2.js"
import CardRecomenda from "../CardRecomenda/CardRecomenda";

const RecomendaContainer = styled.section`
width: 100%;
text-align:center;
`

const livroLancamentosContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:80%;

`

function LivrosLancamentos(){
    return(
        <RecomendaContainer>
            <Titulo2> Ultimos Lançamentos :</Titulo2>
            <livroLancamentosContainer>
            {livros.map(livro => (
                <Imagem src={livro}></Imagem>
            ))}
            </livroLancamentosContainer>
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
import styled from "styled-components"
import  Titulo2  from "../Titulo2/Titulo2"
import { Titulo3 } from "../Titulo3/Titulo3"
import { Paragrafo } from "../Paragrafo/Paragrafo"
import Imagem from "../Imagem/Imagem"

const Card = styled.div`
display:flex;
backgorund-color:white;
justify-content:space-between;
padding:10px 10px;
box-shadow:2px 2px 5px black;
align-items:center;
width:60%;

`

function CardRecomenda({titulo,subtitulo,descricao,img}){
    return(
        <Card>
        <div>
            <Titulo2
            tamanhoFonte="24px"
            cor = "#EB9B00"
            padding = "5px 5px"
            >
                {titulo}
            </Titulo2>
            <Titulo3>{subtitulo}</Titulo3>
            <Paragrafo>{descricao}</Paragrafo>
        </div>
        <div>
        <Imagem src={img} width="30%" padding="5px 5px"></Imagem>
        </div>

        </Card>
    )
}

export default CardRecomenda
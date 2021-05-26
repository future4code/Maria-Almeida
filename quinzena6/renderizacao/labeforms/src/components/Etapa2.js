import React from "react";
import PerguntaGeral from "./PerguntaGeral";

class Etapa2 extends React.Component {
    render () {
        return (
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <PerguntaGeral pergunta={"5 - Qual o curso?"} />
                <PerguntaGeral pergunta={"6 - Qual é a unidade de ensino?"} />
            </div>
        );
    }
}

export default Etapa2;
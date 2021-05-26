import React from "react";
import PerguntaGeral from "./PerguntaGeral";
import PerguntaAlternativas from "./PerguntaAlternativas";

class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <PerguntaGeral
                pergunta={"5 - Por que você não terminou um curso de graduação?"}/>

                <PerguntaAlternativas 
                pergunta={"6 - Você fez algum curso complementar?"}
                opcoes = {["Nenhum", "Técnico", "Inglês"]}/>
                

            </div>
        );
    }
}

export default Etapa3;
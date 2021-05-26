import React from "react";
import PerguntaGeral from "./PerguntaGeral";
import PerguntaAlternativas from "./PerguntaAlternativas";


class Etapa1 extends React.Component {
  render () {
      return (
          <div>
              <h2>ETAPA 1 - DADOS GERAIS</h2>
              <PerguntaGeral pergunta={"1 - Qual é o seu nome?"} />
              <PerguntaGeral pergunta={"2 - Qual é a sua idade?"} />
              <PerguntaGeral pergunta={"3 - Qual é o seu email?"} />
              <PerguntaAlternativas pergunta={"4 - Qual é sua escolaridade?"}
              opcoes={[
                  "Ensino médio incompleto",
                  "Ensino médio completo",
                  "Ensino superior incompleto",
                  "Ensino superior completo"
              ]}
            />
        </div>
      );
    }
}

export default Etapa1;
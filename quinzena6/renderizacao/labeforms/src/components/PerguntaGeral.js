import React from "react";

export default function PerguntaGeral(props){
    return (
        <div>
            <p>{props.pergunta}</p>
            <input onChange={props.onChange} value={props.value} />
        </div>
    );
}
import React from "react";
import './App.css';

export default function LD() {
  return (
    <div className="flex flex-column">
      <div className="formulario flex flex-column">
        <div className="progresso">
          <label className="">Preencha os campos</label>
          <progress value="100" max="100"></progress>
        </div>

        <div className="flex flex-column">
          <label for="nome">Digite seu nome</label>
          <input type="text" id="nome" />
        </div>

        <div className="flex flex-column">
          <label for="telefone">Digite seu telefone</label>
          <input type="text" id="telefone" />
        </div>

        <div className="flex flex-column">
          <label for="telefone">Digite seu e-mail</label>
          <input type="text" id="telefone" />
        </div>

        <div className="flex flex-column">
          <label for="telefone">Digite seu senha</label>
          <input type="password" id="telefone" />
          <button className="mostra-senha">Exibir senha</button>
        </div>

        <div className="flex termos">
          <input type="checkbox" name="aceita-termos" id="aceita-termos" />
          <label for="aceita-termos">
            Eu li, estou ciente das condições de tratamento dos meus dados
            pessoais e dou meu consentimento, quando aplicável, conforme
            descrito nesta
          </label>
        </div>

        <div className="flex">
          <button className="botao" disabled>
            {/* Abrir minha conta */}
            Aceite os termos
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react"
import "../App.css";

export default function Matricula() {
    
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const RegiName = (e) => {
        setNome(e.target.value);
    };
    const RegiEmail = (e) => {
        setEmail(e.target.value);
    };
    const RegiSenha = (e) => {
      setSenha(e.target.value);
    };
    const tell = (e) => {
      setTell(e.target.value);
    };
    const buttonClick = () => {
        setMensagem(`Obrigado ${nome}!, por abrir sua conta! Você receberá no email: ${email}, detalhes sobre o recebimento do cartão.`); 
      };

    return (
        <div className="flex flex-column">
				<div className="formulario flex flex-column">
					<div className="progresso">
						<label className="">Preencha os campos</label>
						<progress value="100" max="100"></progress>
					</div>

					<div className="flex flex-column">
						<label for="nome" >Digite seu nome</label>
						<input onChange={RegiName} value={nome} type="text" id="nome" />
					</div>

					<div className="flex flex-column">
						<label for="telefone">Digite seu telefone</label>
						<input type="text" id="telefone" onChange={tell} />
					</div>

					<div className="flex flex-column">
						<label for="telefone">Digite seu e-mail</label>
						<input onChange={RegiEmail} type="text" id="telefone" />
					</div>

					<div className="flex flex-column">
						<label for="telefone" >Digite seu senha</label>
                        <input type = {passwordVisible ? "text" : "password"} id="telefone" />
						<button className="mostra-senha" onChange={RegiSenha} onClick={togglePasswordVisibility}> {passwordVisible ? "Ocultar" : "Exibir senha"}</button>
					</div>

					<div className="flex termos">
						<input
							type="checkbox"
							name="aceita-termos"
							id="aceita-termos" 
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                            
						<label for="aceita-termos">
							Eu li, estou ciente das condições de tratamento dos
							meus dados pessoais e dou meu consentimento, quando
							aplicável, conforme descrito nesta
						</label>
					</div>

					<div className="flex">
						<button className="botao" disabled={!isChecked} onClick={buttonClick}>
                        {isChecked ? "Abra sua conta" : "Aceite os termos"}
						</button>
					</div>
                    {mensagem && <p>{mensagem}</p>}
				</div>
			</div>
    )
}
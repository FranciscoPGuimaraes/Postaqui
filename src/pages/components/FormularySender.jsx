/** Formulary for senderPage
 * @author Francisco Pereira Guimarães
 */

import { useNavigate } from 'react-router-dom'
import './Formulary.css'
import Input from './Input'
import { useState } from 'react';
import validator from 'validator';

function FormularySender({ name }) {
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [cep, setCep] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [bairro, setBairro] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState("");

    let error = [];

    // Redirect to ReceiverPage with sender's infos
    const navigate = useNavigate();
    const goToReceiver = () => {
        if (nome == null) {
            error.push("nome");
        }
        if (cpf == null) {
            error.push("cpf");
        }
        if (telefone == null || !validator.isMobilePhone(telefone)) {
            error.push("telefone");
        }
        if (email == null || !validator.isEmail(email)) {
            error.push("email");
        }
        if (cep == null) {
            error.push("cep");
        }
        if (estado == null) {
            error.push("estado");
        }
        if (cidade == null) {
            error.push("cidade");
        }
        if (bairro == null) {
            error.push("bairro");
        }
        if (rua == null) {
            error.push("rua");
        }
        if (numero == null) {
            error.push("numero");
        }

        if (error.length > 0) {
            alert("Campos invalidos");
        } else {
            const sender = {
                fullname: nome,
                cpf: cpf,
                phone: telefone,
                email: email,
                address: {
                    cep: cep,
                    state: estado,
                    uf: "Brasil",
                    city: cidade,
                    neighborhood: bairro,
                    street: rua,
                    number: numero,
                    complement: complemento
                }
            }

            // Add sender's infos in search params
            const searchParams = new URLSearchParams();
            searchParams.append('sender', JSON.stringify(sender));


            navigate({
                pathname: '/destino',
                search: '?' + searchParams.toString()
            });
        }
    };

    const nameChange = (event) => {
        setNome(event.target.value);
    }
    const cpfChange = (event) => {
        setCpf(event.target.value)
    }
    const telefoneChange = (event) => {
        setTelefone(event.target.value)
    }
    const emailChange = (event) => {
        setEmail(event.target.value)
    }
    const cepChange = (event) => {
        setCep(event.target.value)
    }
    const cidadeChange = (event) => {
        setCidade(event.target.value)
    }
    const estadoChange = (event) => {
        setEstado(event.target.value)
    }
    const bairroChange = (event) => {
        setBairro(event.target.value)
    }
    const ruaChange = (event) => {
        setRua(event.target.value)
    }
    const numeroChange = (event) => {
        setNumero(event.target.value)
    }
    const complementoChange = (event) => {
        setComplemento(event.target.value)
    }

    return (
        <div className='form'>
            <div>
                <h2>{name}</h2>
            </div>
            <div className="flexBox">
                <Input name={"nome"} text={"Nome"} placeholder={"Insira seu nome"} hadleOnChange={nameChange} />
                <Input name={"cpf"} text={"CPF"} placeholder={"Insira seu CPF"} type={"text"} hadleOnChange={cpfChange} />
                <Input name={"telefone"} text={"Telefone"} placeholder={"Insira seu Telefone"} type={"text"} hadleOnChange={telefoneChange} />
                <Input name={"email"} text={"Email"} placeholder={"Insira seu Email"} type={"text"} hadleOnChange={emailChange} />
                <Input name={"cep"} text={"CEP"} placeholder={"Insira seu CEP"} type={"text"} hadleOnChange={cepChange} />
            </div>
            <div className="flexBox">
                <Input name={"estado"} text={"Estado"} placeholder={"Insira seu Estado"} type={"text"} hadleOnChange={estadoChange} />
                <Input name={"cidade"} text={"Cidade"} placeholder={"Insira sua Cidade"} type={"text"} hadleOnChange={cidadeChange} />
                <Input name={"bairro"} text={"Bairro"} placeholder={"Insira seu Bairro"} type={"text"} hadleOnChange={bairroChange} />
                <Input name={"rua"} text={"Rua"} placeholder={"Insira sua Rua"} type={"text"} hadleOnChange={ruaChange} />
                <Input name={"numero"} text={"Numero"} placeholder={"Numero"} type={"text"} hadleOnChange={numeroChange} />
                <Input name={"complemento"} text={"Complemento"} placeholder={"Complemento"} type={"text"} hadleOnChange={complementoChange} />
            </div>
            <div className="flexBox">
                <div className="formInput">
                    <button className="submit" onClick={goToReceiver}>Avançar</button>
                </div>
            </div>
        </div>
    )
}

export default FormularySender;

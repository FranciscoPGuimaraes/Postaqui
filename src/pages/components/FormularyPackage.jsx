/** Formulary for packagePage
 * @author Francisco Pereira Guimarães
 */

import { useState } from 'react';
import './Formulary.css'
import Input from './Input'
import { useNavigate } from 'react-router-dom';

function FormularyPackage({ name, sender, receiver }) {
    const baseURL = "https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate";

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [largura, setLargura] = useState();
    const [comprimento, setComprimento] = useState();
    const [logistica, setLogistica] = useState(false);
    const [recebimento, setRecebimento] = useState(false);
    const [maosProprias, setMaosProprias] = useState(false);
    const [valor, setValor] = useState();
    const [quantidade, setQuantidade] = useState();
    const [descricao, setDescricao] = useState(" ");

    // Redirect to ReceiverPage with sender, receiver and package infos
    const navigate = useNavigate();
    const goToValorFinal = () => {
        const packg = {
            weight: peso,
            height: altura,
            width: largura,
            length: comprimento,
            reverse: false,
            ar: false,
            own_hands: false,
            information: {
                amount: valor,
                quantity: quantidade,
                description: descricao
            }
        }

        // Add sender, receiver and package infos in search params
        const searchParams = new URLSearchParams();
        searchParams.append('sender', JSON.stringify(sender));
        searchParams.append('receiver', JSON.stringify(receiver));
        searchParams.append('packg', JSON.stringify(packg));

        navigate({
            pathname: '/valorfinal',
            search: '?' + searchParams.toString()
        });

    };

    const pesoChange = (event) => {
        setPeso(event.target.value);
    }
    const AlturaChange = (event) => {
        setAltura(event.target.value)
    }
    const larguraChange = (event) => {
        setLargura(event.target.value)
    }
    const comprimentoChange = (event) => {
        setComprimento(event.target.value)
    }
    const logisticaChange = (event) => {
        setLogistica(event.target.value)
    }
    const recebimentoChange = (event) => {
        setRecebimento(event.target.value)
    }
    const maosPropriasChange = (event) => {
        setMaosProprias(event.target.value)
    }
    const valorChange = (event) => {
        setValor(event.target.value)
    }
    const quantidadeChange = (event) => {
        setQuantidade(event.target.value)
    }
    const descricaoChange = (event) => {
        setDescricao(event.target.value)
    }


    return (
        <div className='form'>
            <div>
                <h2>{name}</h2>
            </div>
            <div className="flexBox width-total">
                <div className="flexBox width-total">
                    <div className="flexBox align-items-center vertical" >
                        <Input name={"peso"} text={"Peso"} placeholder={"Peso do packg"} hadleOnChange={pesoChange} />
                        <Input name={"altura"} text={"Altura"} placeholder={"Altura do packg"} type={"text"} hadleOnChange={AlturaChange} />
                        <Input name={"largura"} text={"Largura"} placeholder={"Largura do packg"} type={"text"} hadleOnChange={larguraChange} />
                        <Input name={"comprimento"} text={"Comprimento"} placeholder={"Comprimento do packg"} type={"text"} hadleOnChange={comprimentoChange} />
                    </div>
                    <div className="flexBox align-items-center vertical" >
                        <div className="formInput align-items-center">
                            <label htmlFor="logisticaReversa">Logistica Reversa</label>
                            <input className="checkInput" type="checkbox" name="logisticaReversa" onChange={logisticaChange}></input>
                        </div>
                        <div className="formInput align-items-center">
                            <label htmlFor="avisoRecebimento">Aviso de recebimento</label>
                            <input className="checkInput" type="checkbox" name="avisoRecebimento" onChange={recebimentoChange}></input>
                        </div>
                        <div className="formInput align-items-center">
                            <label htmlFor="maosProprias">Mãos Proprias</label>
                            <input className="checkInput" type="checkbox" name="maosProprias" onChange={maosPropriasChange}></input>
                        </div>
                    </div>
                </div>
                <div className="flexBox width-total">
                    <div className="flexBox align-items-center vertical flex2" >
                        <div className="flexBox widht-total">
                            <Input name={"valor"} text={"Valor"} placeholder={"Insira o valor do item"} type={"text"} hadleOnChange={valorChange} />
                            <Input name={"quantidade"} text={"Quantidade"} placeholder={"Insira a quantidade de itens"} type={"text"} hadleOnChange={quantidadeChange} />
                        </div>
                        <div className="flexBox widht-total">
                            <div className="formInput widht-total">
                                <label htmlFor="descricao">Descrição</label>
                                <input className="descricao" type="text" name="descricao" onChange={descricaoChange}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inputs">
                <div className="formInput">
                    <button className="submit" type="submit" onClick={goToValorFinal}>Avançar</button>
                </div>
            </div>
        </div>
    )
}

export default FormularyPackage;

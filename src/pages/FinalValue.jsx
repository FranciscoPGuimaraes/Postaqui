/**
 * FinalValuePage - This page contains the form with final value information
 * @author Francisco Pereira Guimarães 
 */

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css';
import FormularyFinalValue from './components/FormularyFinalValue';
import logo from '../assets/logo.png';
import seta from '../assets/seta.png';
import Information from './components/Information';

function FinalValue() {
    const baseURL = "https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate";
    const [data, setData] = useState();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const senderStr = searchParams.get("sender");
    const sender = JSON.parse(senderStr);
    const receiverStr = searchParams.get("receiver");
    const receiver = JSON.parse(receiverStr);
    const packgStr = searchParams.get("packg");
    const packg = JSON.parse(packgStr);

    /**API request
     * @request JSON with sender, receiver and package infos
     * @response JSON with shipment infos
     *  */
    useEffect(() => {
        axios.post(baseURL, {
            sender: sender,
            receiver: receiver,
            package: packg
        })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className="container">
            <div className="title">
                <img src={logo} alt="Logo" />
                <h1>Teste Calculadora Postaqui</h1>
            </div>
            <div className="infos">
                {/* Informations */}
                <Information name="Origem" data={sender} link="/" />
                <img src={seta} alt="Seta" />
                <Information name="Destino" data={receiver} link="/destino" />
                <img src={seta} alt="Seta" />
                <a href="/pacote">
                    <div className='info'>
                        <h3>Pacote</h3>
                        <p>Peso: {packg.weight}Kg</p>
                        <p>Dimensão: {packg.weight}x{packg.height}x{packg.lenght}</p>
                        <p>Preço: R$ {packg.information.amount}</p>
                    </div>
                </a>
            </div>
            <FormularyFinalValue name="Valor Final do Frete" shipment={data.shipment} />
        </div>
    );
}

export default FinalValue;

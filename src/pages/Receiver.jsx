/**
 * ReceiverPage - This page contains the form with receiver information
 * @author Francisco Pereira Guimarães 
 */

import { useLocation } from 'react-router-dom'
import './Pages.css'
import logo from '../assets/logo.png'
import Information from './components/Information'
import FormularyReceiver from './components/FormularyReceiver'

function Receiver() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const senderStr = searchParams.get("sender")
    const sender = JSON.parse(senderStr);

    return (
        <div className="container">
            <div className="title">
                <img src={logo} alt="Logo"></img>
                <h1>Teste Calculadora Postaqui </h1>
            </div>
            <div className="infos">
                {/* Informations  */}
                <Information name="Origem" data={sender} link="/"/>
            </div>
            {/* ReceiverForm */}
            <FormularyReceiver name="Formulario de Destino" sender={sender}/>
        </div>
    )
}

export default Receiver
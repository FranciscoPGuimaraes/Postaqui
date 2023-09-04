/**
 * PackagePage - This page contains the form with package information
 * @author Francisco Pereira Guimarães 
 */

import { useLocation } from 'react-router-dom'
import './Pages.css'
import logo from '../assets/logo.png'
import seta from '../assets/seta.png'
import Information from './components/Information'
import FormularyPackage from './components/FormularyPackage'

function Package() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const senderStr = searchParams.get("sender")
    const sender = JSON.parse(senderStr);
    const receiverStr = searchParams.get("receiver")
    const receiver = JSON.parse(receiverStr);

    return (
        <div className="container">
            <div className="title">
                <img src={logo} alt="Logo"></img>
                <h1>Teste Calculadora Postaqui</h1>
            </div>
            <div className="infos">
                {/* Informations */}
                <Information name="Origem" data={sender} link="/" />
                <img src={seta} alt="Seta"></img>
                <Information name="Destino" data={receiver} link="/destino" />
            </div>
            {/* PackageForm */}
            <FormularyPackage name="Formulario de Pacote" sender={sender} receiver={receiver}/>
        </div>
    )
}

export default Package
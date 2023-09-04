/**
 * SenderPage - This page contains the form with sender information
 * @author Francisco Pereira Guimarães 
 */

import './Pages.css'
import FormularySender from './components/FormularySender'
import logo from '../assets/logo.png'

function Sender() {
    return (
        <div className="container">
            <div className="title">
                <img src={logo} alt="Logo"></img>
                <h1>Teste Calculadora Postaqui</h1>
            </div>
            
            {/* SenderForm */}
            <FormularySender name="Formulario de Origem"/>
        </div>
    )
}

export default Sender
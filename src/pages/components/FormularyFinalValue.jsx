/** Formulary for finalValuePage
 * @author Francisco Pereira Guimarães
 */

import './Formulary.css'

function FormularyFinalValue({ name, shipment }) {
    let price = shipment[0].price; 
    let cheaper = shipment[0];

    // Comparing shipment 
    for (let i = 1; i < shipment.length; i++) {
        if (shipment[i].price < price) {
            price = shipment[i].price;
            cheaper = shipment[i];
        }
    }

    return (
        <div className='form'>
            <div>
                <h2>{name}</h2>
            </div>
            <div className='flexBox width-total vertical align-items-center'>
                <p>O melhor frete para o seu destino é {cheaper.carrier} com o valor de R${cheaper.price} com entrega no prazo de 5 dias uteis</p>
                <p>Sua economia foi de R${cheaper.discount}</p>
            </div>
        </div>
    )
}

export default FormularyFinalValue;

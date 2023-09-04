import './Information.css'

function Information({name, data, link}) {
    return (
        <a href={link}>
            <div className="info">
                <h3>{name}</h3>
                <p>{data.address.street} - {data.address.number}</p>
                <p>{data.address.neighborhood} - {data.address.city}</p>
                <p>{data.address.cep}</p>
            </div>
        </a>
    );
}

export default Information
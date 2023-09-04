
import './Input.css'

function Input({ name, text, type, placeholder, value, hadleOnChange}) {
    
    return (
        <div className="formInput">
            <label htmlFor={name}>{text}</label>
            <input id={name} type={type} name={name} placeholder={placeholder} value={value} onChange={hadleOnChange}></input>
        </div>
    );

}

export default Input;
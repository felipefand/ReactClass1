import './InputField.css';

const InputField = (props) => {

    return (
        <div className="input-field">
            <label>{props.label}</label>
            <input value={props.val} onChange={event => props.onChange(event.target.value)} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputField
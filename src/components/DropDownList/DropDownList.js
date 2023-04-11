import "./DropDownList.css";

const DropDownList = (props) => {

    return (
        <div className="drop-down-list">
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.val}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList;
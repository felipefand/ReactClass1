import "./CardForm.css";
import { useState } from 'react';
import InputField from "../InputField/InputField";
import DropDownList from "../DropDownList/DropDownList";
import Button from "../Button/Button";

const CardForm = (props) => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSubmitButtonPressed = (event) => {
        event.preventDefault();
        props.onMemberRegistered({
            name,
            job,
            image,
            team
        })
        setName('')
        setJob('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="card-form">
            <form onSubmit={onSubmitButtonPressed}>
                <h2>Fill in the data to create the card.</h2>
                <InputField
                    required={true}
                    label="Name"
                    placeholder="Full Name"
                    val={name}
                    onChange={val => setName(val)}
                />
                <InputField
                    required={true}
                    label="Job"
                    placeholder="Job Name"
                    val={job}
                    onChange={val => setJob(val)}
                />
                <InputField
                    label="Image"
                    placeholder="Image address"
                    val={image}
                    onChange={val => setImage(val)}
                />
                <DropDownList 
                    required={true}
                    label="Team"
                    itens={props.teams}
                    val={team}
                    onChange={val => setTeam(val)}
                    />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default CardForm;
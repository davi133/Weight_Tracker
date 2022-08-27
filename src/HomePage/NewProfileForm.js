import { useState } from "react";
import Profile, { saveProfile, retrieveAccount } from "../model/Profiles";
import BackgroundBlocker from "../BackgroundBlocker";

export default function NewProfileForm(props) {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputs.senha !== inputs.senha2) {
            alert("confirme sua senha");
        }
        else if (retrieveAccount(inputs.email)) {
            alert("já existe uma conta com esse email");
        }
        else {
            saveProfile(new Profile(inputs.name, inputs.email, inputs.senha));
            alert("conta criada");
        }


    }



    return (
        <BackgroundBlocker On = {props.On} onClick={() => { props.onCancel(); setInputs({}) }} >


        <div className="newProfileFormBody" onClick={props.onFormClick} style={props.style}>
            <h2>Criar novo Perfil</h2>

            <form className="the_form" onSubmit={handleSubmit}>
                <label>Name:
                    <br></br>
                    <input type="text" value={inputs.name || ""} name="name" onChange={handleChange} required />
                </label>

                <label>Email:
                    <br></br>
                    <input type="email" value={inputs.email || ""} name="email" onChange={handleChange} required />
                </label>

                <label>Senha:
                    <br></br>
                    <input type="password" value={inputs.senha || ""} name="senha" onChange={handleChange} required />
                </label>
                <label>Confirme a senha:
                    <br></br>
                    <input type="password" value={inputs.senha2 || ""} name="senha2" onChange={handleChange} required />
                </label>


                <div>
                    <input type="submit" value="Cadastrar" />
                    <input type="button" value="Fechar" onClick={() => { props.onCancel(); setInputs({}) }} />
                </div>

            </form>
        </div>
        </BackgroundBlocker>




    );


}
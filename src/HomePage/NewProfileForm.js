import { useState } from "react";
import Profile, { saveProfile, retrieveAccount } from "../model/Profiles";
import { CacheProfile } from "./CachedProfiles";
import { json, useNavigate } from "react-router-dom";
import $ from "jquery";

export default function NewProfileForm(props) {
    const [inputs, setInputs] = useState({});
    const [warningMsg,setWarningMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputs.senha !== inputs.senha2) {
            //senha não confirmada
            setWarningMsg("confirme sua senha");
        }
        /*
        ===# RESPONSABILIDADE DO BACK END #===
        else if (retrieveAccount(inputs.email)) {
            //conta já existente
            setWarningMsg("já existe uma conta com esse email");
        }
        ===# ############################ #===*/
        else {
            //conta criada com sucesso
            let profile = new Profile(inputs.name, inputs.email, inputs.senha);
            //saveProfile(prof);
            
            $.ajax({
                type: "post",
                url: "http://localhost:8080/weightTrackerBack/cadastrarUsuario.php",
                data: profile,
                success(response) {
                    console.log("server response is: ");
                    let data = {}
                    //let data = JSON.parse(response);
                    console.log(response);
                    if (!data.sucesso)
                    {
                        setWarningMsg(data.message);
                    } 
                    else
                    {
                        CacheProfile(profile);
                        navigate("/app");
                    }


                },
            });
            
            
            
            
            //navigate("/app")
            //onClose();
        }


    }


    const onClose = ()=>
    {
        props.onCancel();
         //in case you decide it should do something more on close
    }

    return (
        <div className="genericWindow" onClick={props.onFormClick} style={props.style}>
            <h2>Criar novo Perfil</h2>

            <form className="genericForm" onSubmit={handleSubmit}>
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

                {warningMsg !=="" &&
                        <div className="warningBox">
                            {warningMsg}
                        </div>
                }


                <div>
                    <input type="submit" value="Cadastrar" />
                    <input type="button" value="Fechar" onClick={onClose} />
                </div>

            </form>
        </div>
    );


}
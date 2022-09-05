import PopUpElement from "../PopUpElement";
import { useState } from "react";

export default function ProfileLogIn(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        props.onLogIn(inputs.email);


        onClose();

    }   

    const onClose = ()=>
    {
        props.onCancel();
        setInputs({}) 
    }


    return (
        <PopUpElement Trigger={props.Trigger} onClick={onClose}>

            <div className="genericWindow" style={props.style}>


                <form className="genericForm" onSubmit={handleSubmit}>
                    <label>Email:
                        <br></br>
                        <input type="email"  name="email" value={inputs.email || ""}
                        onChange={handleChange} 
                        placeholder="exemplo@email.com" required />
                    </label>

                    <label>Senha:
                        <br></br>
                        <input type="password"  name="password"  value={inputs.password || ""}
                        onChange={handleChange}
                        required />
                    </label>

                    <div>
                        <input type="submit" value="Entrar" />
                        <input type="button" value="Fechar" onClick={onClose}/>
                    </div>
                </form>



            </div>



        </PopUpElement>


    );

}
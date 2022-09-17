
import { useState } from "react";
import "../model/Profiles";
import Profile from "../model/Profiles";

export default function ProfileLogIn(props) {
    var withEmail =  props.email!==undefined && props.email.length!==0;
    const [inputs, setInputs] = useState({email: withEmail?props.email:""});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        props.onLogIn(new Profile('a',inputs.email,inputs.password)) && onClose();


    }   

    const onClose = ()=>
    {
        props.onCancel();
        withEmail?setInputs({email:props.email}):setInputs({});
    }

    //console.log(withEmail);
    //console.log(inputs);
    //console.log(props.email)

    return (
            <div className="genericWindow" style={props.style}>


                <form className="genericForm" onSubmit={handleSubmit}>
                    <label>Email:
                        <br></br>
                        <input type="email"  name="email" value={            
                            inputs.email || ""}
                        onChange={handleChange} 
                        placeholder="exemplo@email.com" required disabled={withEmail} />
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
    );

}

import { useState } from "react";
import { CacheProfile } from "../Data/CachedProfiles";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../Data/ProfileDB";


/**
 * Form to login
 * @param profile: profile to log in
 * @param function: onCancel
 */
export default function LoginForm(props) {
    var withEmail =  props.profile.email!==undefined && props.profile.email.length!==0;
    const [inputs, setInputs] = useState({email: withEmail?props.profile.email:""});
    const [warningMsg,setWarningMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let profile = props.profile;
        profile.senha = inputs.password;
        let response = await validateLogin(profile.email, profile.senha);
        if (!response.sucesso)
        {      
            setWarningMsg("Erro: "+response.message);   
        } 
        else
        {
            CacheProfile(profile);
            onClose();
            navigate("/app");
        }

    }   

    const onClose = ()=>
    {
        props.onCancel();
        //in case you decide it should do something more on close
    }

    return (
            <div className="genericWindow" style={props.style}>
                <h2>
                    Fazer login
                </h2>

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

                    {warningMsg !=="" &&
                        <div className="warningBox">
                            {warningMsg}
                        </div>
                    }
           
                    <div>
                        <input type="submit" value="Entrar" />
                        <input type="button" value="Fechar" onClick={onClose}/>
                    </div>
                </form>
            </div>
    );

}
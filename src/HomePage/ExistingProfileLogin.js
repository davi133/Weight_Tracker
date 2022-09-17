
import { useState } from "react";
import Profile,{retrieveAccount} from "../model/Profiles"

export default function ProfileLogIn(props) {
    var withEmail =  props.email!==undefined && props.email.length!==0;
    const [inputs, setInputs] = useState({email: withEmail?props.email:""});
    const [warningMsg,setWarningMsg] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        //props.onLogIn(new Profile('a',inputs.email,inputs.password)) && onClose();

        let profile = new Profile('a',inputs.email,inputs.password);

        let account = retrieveAccount(profile.email);
        if (!account)
        {
            setWarningMsg("Essa conta não existe")
            return false;
        }
        if (account.senha === profile.senha)
        {
            setWarningMsg("thanks for login in, " + profile.email)
            onClose();
            return true;
        }
        else
        {
            setWarningMsg("senha incorreta");
            return false;
        }




    }   

    const onClose = ()=>
    {
        props.onCancel();
        //in case you decide it should do something more on close
        
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
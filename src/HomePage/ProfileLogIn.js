import BackgroundBlocker from "../BackgroundBlocker";

export default function ProfileLogIn(props) {



    return (
        <BackgroundBlocker On={props.On} onClick={props.onCancel}>

            <div className="genericWindow" style={props.style}>

                <h2>Criar novo Perfil</h2>

                <form className="genericForm" onSubmit={undefined}>
                    <label>Name:
                        <br></br>
                        <input type="text"  name="name"  required />
                    </label>

                    <div>
                        <input type="submit" value="Cadastrar" />
                        <input type="button" value="Fechar"/>
                    </div>
                </form>



            </div>



        </BackgroundBlocker>


    );

}
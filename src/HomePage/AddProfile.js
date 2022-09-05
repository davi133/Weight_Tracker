import PopUpElement from "../PopUpElement";

export default function AddProfile(props)
{


    return (
        <PopUpElement Trigger = {props.Trigger} onClick={()=>{props.onCancel()}} >

            <div className="genericWindow choiceWindow">

                <button>Perfil Existente</button>
                <button>Novo Perfil</button>
                <button onClick={()=>props.onCancel()}>Voltar</button>

            </div>


        </PopUpElement>

    );
}
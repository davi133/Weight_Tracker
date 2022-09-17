
export default function AddProfile(props)
{


    return (

            <div className="genericWindow choiceWindow">

                <button onClick={()=>props.onExisting()}>Perfil Existente</button>
                <button onClick={()=>props.onNew()}>Novo Perfil</button>
                <button onClick={()=>props.onCancel()}>Voltar</button>

            </div>

    );
}
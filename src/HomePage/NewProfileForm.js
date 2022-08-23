


export default function NewProfileForm(props) {







    return (
        <div className="NewProfileComponent" style={props.style} onClick={props.onClick}>
            
            <div className="screenBlocker" onClick={()=>{ props.onCancel();}}>
            </div>

            <div className="newProfileFormBody" onClick={props.onFormClick}>
                
            </div>
        </div>
    );


}

export default function ProfileCard(props)
{

    

    return (
        <div className="profileCardBody" onClick = {props.onClick}>
            {props.profile?props.profile.name:"sem nome"}
        </div>


    );
}


export default function BackgroundBlocker(props)
{ 
    var _On = props.On
    
    if (_On === undefined || _On===null)
    {
        _On = false
    }
    if (props.onClick === undefined)
    {
        console.warn("the onClick event from Background Blocker is undefined,"+
        " it is recommended to pass an event to close the background blocker")
    }

    return (
        <div className="backGroundBlockerCapsule"   
        style={ { ...props.style, display: _On ? "flex" : "none"} }>

            <div className="backGroundBlocker" onClick={props.onClick}/>
            <div style = {{position:"absolute"}}>
            {props.children}
            </div>

        </div>

    );
}
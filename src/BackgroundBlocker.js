export default function BackgroundBlocker(props)
{ 
    var _On = props.On
    
    if (_On === undefined || _On===null)
    {
        _On = false
    }

    return (
        <div className="backGroundBlockerCapsule"  onClick={props.onClick} 
        style={ { ...props.style, display: _On ? "flex" : "none"} }>

            <div className="backGroundBlocker"/>
            <div style = {{position:"absolute"}}>
            {props.children}
            </div>

        </div>

    );
}
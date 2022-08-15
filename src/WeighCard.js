import { useEffect, useState } from "react";
import "./WeightCard.css";
import icon_edit from "./icon_more_options1.png"

export default function WeightCard(props) {
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => { console.log("render(" + props.info.date + ")") })

    return (
        <div className="weightCard">
            <div className="weightDisplay">
                {props.info.weight} Kg
            </div>
            <div className="dateDisplay">
                {props.info.date}
            </div>

            <div className="dropdown" onMouseLeave={()=>{setDropDown(false)}} >

                <img className="cardOptionsBtn" src={icon_edit} alt=""
                onClick={()=>{setDropDown(true)}}></img>

                <div className="OptionsMenu"
                    style={{ display: !dropDown ? "none" : "block" }}       >
                    <div className="aOption" 
                    onClick={()=>{console.log("editar")}}>
                        editar
                    </div>
                    <div className="aOption delOption"
                    onClick={()=>{console.log("excluir")}}>
                        excluir
                    </div>
                </div>

            </div>

        </div>
    );
}
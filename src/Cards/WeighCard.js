import { useState } from "react";
import "./WeightCard.css";
import icon_edit from "./icon_more_options1.png"
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';


export default function WeightCard(props) {
    const [dropDown, setDropDown] = useState(false);

  

    return (
        <div className="weightCard">
            <div className=" infoDisplay">
                {props.info?.weight} Kg
            </div>
            <div className="infoDisplay">
                {props.info?.date}
            </div>

            <div className="dropdown" onMouseLeave={()=>{setDropDown(false)}} >

                {/*<img className="cardOptionsBtn" src={icon_edit} alt=""
                onClick={()=>{setDropDown(true)}}></img>*/}
                <FontAwesomeIcon icon={faPencil} className="cardOptionsBtn" size="lg"
                onClick={()=>{setDropDown(true)}}/>

                <div className="OptionsMenu"
                    style={{ display: !dropDown ? "none" : "block" }}       >
                    <div className="aOption" 
                    onClick={()=>{console.log("editar")}}>
                        EDITAR
                    </div>
                    <div className="aOption delOption"
                    onClick={()=>{console.log("excluir")}}>
                        EXCLUIR
                    </div>
                </div>

            </div>

        </div>
    );
}
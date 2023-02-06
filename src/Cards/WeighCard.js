import { useState } from "react";
import "./WeightCard.css";
//import icon_edit from "./icon_more_options1.png"
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import WeightReg from "../model/WeightReg";

/**
 * Card to display a weightRegister
 * @param info: a WeightReg object
 * @param onEdit: function to run on save
 * @param onDelete: function to run on delete
 */
export default function WeightCard(props) {
    const [dropDown, setDropDown] = useState(false);

  
    //console.log(props.info.id);
    const EditEvent = ()=>
    {
        console.log("editar")
        if (props.onEdit!== undefined)
        {
            props.onEdit()
        }
    }

    const DeleteEvent = ()=>
    {
        console.log("excluir")
        if (props.onDelete!== undefined)
        {
            props.onDelete(props.info);
        }
    }

    let display_date="data"
    //let esse_id = props.info? props.info.id:-1;
    if (props.info?.date !== undefined)
    {
        display_date = props.info?.date()
    }
    else
    {
        let wr = WeightReg(0,props.info?.year,props.info?.month,props.info?.day)
        display_date =wr.date()
    }

    return (
        <div className="weightCard">

            <div className=" infoDisplay">
                {props.info?.weight} Kg
            </div>
            <div className="infoDisplay">
                {display_date}
            </div>

            <div className="dropdown" onMouseLeave={()=>{setDropDown(false)}} >

                {/*<img className="cardOptionsBtn" src={icon_edit} alt=""
                onClick={()=>{setDropDown(true)}}></img>*/}
                <FontAwesomeIcon icon={faPencil} className="cardOptionsBtn" size="lg"
                onClick={()=>{setDropDown(true)}}/>

                <div className="OptionsMenu"
                    style={{ display: !dropDown ? "none" : "block" }}       >
                    <div className="aOption" 
                    onClick={EditEvent}>
                        EDITAR
                    </div>
                    <div className="aOption delOption"
                    onClick={DeleteEvent}>
                        EXCLUIR
                    </div>
                </div>

            </div>

        </div>
    );
}
import { useState } from "react";
import "./WeightCard.css";
import icon_edit from "./icon_more_options1.png"
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';

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
        console.log("editar");
        if (props.onEdit!== undefined)
        {
            props.onEdit();
        }
    }

    const DeleteEvent = ()=>
    {
        console.log("excluir");
        if (props.onDelete!== undefined)
        {
            props.onDelete(props.info);
        }
    }

    let esse_id = props.info? props.info.id:-1;

    return (
        <div className="weightCard">
            {esse_id}
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
import "./WeightCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddWeightButton(props) {

    return (
        <>
        <div className="weightCard" onClick={props.onClick} >

            <div className="iconBtnDisplay">
            <FontAwesomeIcon icon={faPlus} className="faIcon" size="lg"
                onClick={()=>{}}/>
            </div>
        </div>
       

        </>

    )
}
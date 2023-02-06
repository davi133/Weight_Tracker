import { useRef, useState } from "react";
import WeightReg from "../model/WeightReg";

/**An element to create or edit weight regs
 * 
 * @param info: a weightReg to edit
 * @param onSave: function to run on save
 * @param onDelete: function to run on delete
 */
export default function WeighCardCreator(props) {

    const [weight, setWeight] = useState(props.info ? props.info.weight : "0");
    const [date, setDate] = useState(props.info ? props.info.date : new Date().toLocaleDateString("en-CA"));
    const weightInput = useRef();
    const dateInput = useRef();

    const SaveEvent = () => {

        let weightNumber = parseFloat(weight.replace(",", "."))
        
        var dateObj = dateInput.current.valueAsDate
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        
        let wr = WeightReg(weightNumber, year,month,day)
        //console.log("confirmando a data: "+day +"/"+month +"/"+year)
        
        if (props.onSave !== undefined) {
            props.onSave(wr);
        }
    }

    const DeleteEvent = () => {
        console.log("excluir");
        if (props.onDelete !== undefined) {
            props.onDelete();
        }
    }


    return (
        <div className="weightCard">

            <div className="infoDisplay"
                onClick={() => { weightInput.current.focus() }}>
                <input className="weightInputDisplay" type="text" ref={weightInput}
                    value={weight}
                    onChange={event => {
                        setWeight((event.target.value).replace(/[^\d.,-]/g, ''));

                    }}
                ></input>Kg
            </div>
            {/*<input className="infoInput" type="text"
                value={date}
                onChange={event => setDate(event.target.value)}
            ></input>*/}

            <div className="infoDisplay"
                onClick={() => { dateInput.current.showPicker() }}>
                <input type="date" className=" dateInputDisplay"
                    ref={dateInput}
                    value={date}
                    onChange={(event) => {
                        setDate(event.target.value);
                        
                    }}
                ></input>
            </div>

            <div className="infoDisplay">
                <button className="btnDisplay btnSave" onClick={SaveEvent}>SALVAR</button>
            </div>
            <div className="infoDisplay">
                <button className="btnDisplay btnDelete" onClick={DeleteEvent}>CANCELAR</button>
            </div>



        </div>
    );
}
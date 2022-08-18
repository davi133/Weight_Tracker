import { useRef, useState } from "react";



export default function WeighCardCreator(props) {

    const [weight, setWeight] = useState(props.info ? props.info.weight : 0);
    const [date, setDate] = useState(props.info ? props.info.date : "2022-08-14");
    const weightInput = useRef();
    const dateInput = useRef();



    return (
        <div className="weightCard">
            
            <div className="infoDisplay"
            onClick={()=>{weightInput.current.focus()}}>
                <input className="weightInputDisplay" type="text" ref={weightInput}
                    value={weight}
                    onChange={event => setWeight((event.target.value).replace(/[^\d.,-]/g, ''))}
                ></input>Kg
            </div>
            {/*<input className="infoInput" type="text"
                value={date}
                onChange={event => setDate(event.target.value)}
            ></input>*/}

            <div className="infoDisplay"
                 onClick={()=>{dateInput.current.showPicker()}}>
            <input type="date" className=" dateInputDisplay"
                    ref = {dateInput}
                    value={date}
                    onChange={(event) => {setDate(event.target.value)}}
            ></input>
            </div>

            <div className="infoDisplay">
                <button className="btnDisplay btnSave">SALVAR</button>
            </div> 
            <div className="infoDisplay">
                <button className="btnDisplay btnDelete">APAGAR</button>
            </div>



        </div>
    );
}
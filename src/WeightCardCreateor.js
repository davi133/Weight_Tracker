import { useState } from "react";



export default function WeighCardCreator(props){

    const [weight, setWeight] = useState(props.info.weight);
    const [date, setDate] = useState(props.info.date);
    const [date2, setDate2] = useState("2022-08-14");

    

    return (
        <div className="weightCard">
            <input className="weightDisplay" type="text"
            value={weight}
            onChange={event => setWeight((event.target.value).replace(/[^\d.,-]/g, '') )}
            ></input>Kg
            <input className="dateDisplay" type="text"
            value={date}
            onChange={event => setDate(event.target.value)}
            ></input>
            <input type="date"
            value={date2}
            onChange={(event) => 
                {
                    console.log(event.target.value)
                    setDate2(event.target.value)
                }}
            ></input>

           

        </div>
    );
}
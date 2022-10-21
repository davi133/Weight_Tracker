import React, { useEffect, useRef, useState } from "react";
import WeightCard from "../Cards/WeighCard";
import WeightCardCreator from "../Cards/WeightCardCreator";
import WeightReg from "../model/WeightReg";
import WeightDB from "../Data/WeightDB"
import "./App.css";

export default function AppPage(props) {

    const [a, setA] = useState(0);
    //var s = [];
    var listOfWeight = useRef();


    useEffect(() => {
        WeightDB.retrieveAllWeights("a").then((data) => {
            listOfWeight.current = data;
            setA(1);
        })
    }, []
    );


    const saveWeight = async (data) => {
        await WeightDB.saveWeight(data)

    }

    const test = () => {
        console.log("teste");
    }

    return (
        <div className="appBody">
            <button onClick={test}> teste</button>
            <div className="recordsList">
                {
                   
                   
                   listOfWeight.current != undefined && listOfWeight.current.map( (element, index)=>{
                    return <WeightCard info = {element} key = {index}/>
                   }
                   )
                }
                <WeightCardCreator
                    onSave={saveWeight}
                />

            </div>

        </div>

    );
}
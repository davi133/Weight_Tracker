import React, { useEffect, useState } from "react";
import WeightCard from "../Cards/WeighCard";
import WeightCardCreator from "../Cards/WeightCardCreator";
//import WeightReg from "../model/WeightReg";
import WeightDB from "../Data/WeightDB"
import "./App.css";

export default function AppPage(props) {

    const [listOfWeight, setListOfWeight] = useState([])


    useEffect(() => {
        WeightDB.retrieveAllWeights("a").then((data) => {
            setListOfWeight(data)
            /*WeightDB.listenToChanges(async function up(){
                setListOfWeight(await retrieveAllWeights(""))
            });*/
        })
    }, [listOfWeight]
    );

    const saveWeight =(data) => {
        WeightDB.saveWeight(data);

    }

    const deleteWeight =async  (data)=>{
        await WeightDB.deleteWeight(data);
        //listOfWeight +=[1];

    }


    /**
     * this function is only for debug
     */
    const test = () => {
        console.log("teste");
    }

    return (
        <div className="appBody">
            
            <button onClick={test}> teste</button>
            <div className="recordsList">
                {


                    listOfWeight !== undefined && listOfWeight.map((element, index) => {
                        return <WeightCard info={element} key={index} 
                        onDelete ={deleteWeight}

                        />
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
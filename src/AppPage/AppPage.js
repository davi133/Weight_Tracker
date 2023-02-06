import React, { useEffect, useState } from "react";
import WeightCard from "../Cards/WeighCard";
import WeightCardCreator from "../Cards/WeightCardCreator";
import AddWeightButton from "../Cards/AddWeightButton";
//import WeightReg from "../model/WeightReg";
import WeightDB from "../Data/WeightDB"
import "./App.css";
import WeightReg from "../model/WeightReg";

//página principal do aplicativo, aquela que você cria os weight cards
export default function AppPage(props) {

    
    const [listOfWeight, setListOfWeight] = useState([])
    //dicionario id=>bool que se decide se renderiza o card ou o editor
    const [renderEditList, updateRenderEditList] = useState({})

    useEffect(() => {
        WeightDB.retrieveAllWeights("a").then((data) => {
            setListOfWeight(data);
            let newRenderList ={};
            listOfWeight.forEach((item)=>{
                newRenderList = {...newRenderList,[item.id]:false}
            })
            updateRenderEditList({...newRenderList,"last":false});
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    );

    const saveWeight = (data) => {
        updateRenderEditList({...renderEditList,"last":false})
        WeightDB.saveWeight(data)
            .then(() =>WeightDB.retrieveAllWeights("a"))
            .then((data)=>setListOfWeight(data))


    }

    const deleteWeight = (data) => {
        WeightDB.deleteWeight(data)
        .then(() =>WeightDB.retrieveAllWeights("a"))
            .then((data)=>setListOfWeight(data))
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

                        if (!renderEditList[element.id]) {
                            let _elem = WeightReg(element.weight,element.year,element.month,element.day)
                            return <WeightCard info={_elem} key={index}
                                onDelete={deleteWeight}

                            />
                        }
                        else {
                            return <WeightCardCreator info={element} key={index} />
                        }
                    }
                    )


                } 
                
                {
                    !renderEditList["last"] ?
                        <AddWeightButton
                            onClick={() => {
                                updateRenderEditList({ ...renderEditList, "last": true })
                            }} /> :
                        <WeightCardCreator
                            onSave={saveWeight}
                        />
                }


            </div>

        </div>

    );
}


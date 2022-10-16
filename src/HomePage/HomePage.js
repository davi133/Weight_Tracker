import "./HomePage.css";
import "../model/Profiles";
import newPrpfileIcon from "./NewProfile.png";
import PopUpElement from "../PopUpElement";

import SignInForm from "./SignInForm";
import LoginForm from "./LoginForm";

import { useRef, useState} from "react";


import {retrieveAllCahcedProfiles} from "../Data/CachedProfiles";

export default function HomePage(props) {


    const [currentWindow, setCurrentWindow] = useState("none"); //none//login//login_add//signin//options
    
    var cachedAccouts = retrieveAllCahcedProfiles();
    var auxAccount = useRef(-1);

    const teste = () => {
        //GETPHP();
    };


    return (
        <>
            <div className="pseudoBody">
                <div className="profilesPlate">
                    {
                        cachedAccouts.map((element,index) => {
                            //console.log(element);
                            return <ProfileCard key={index} profile = {element} 
                            onClick = {()=>{auxAccount.current=index;setCurrentWindow("login")}}/>
    
                        })
                    }
                    
                    <NewProfileOption onClick={() => { setCurrentWindow("options"); }} />
                    <NewProfileOption onClick={teste} />
                </div>

                <PopUpElement Trigger={currentWindow !== "none"} onClick={() => setCurrentWindow("none")}>
                    {currentWindow === "login" && (
                        <LoginForm
                            profile = {cachedAccouts[auxAccount.current]}
                            onCancel={() => setCurrentWindow("none")}
                        />
                    )}

                    {currentWindow === "options" && (
                        <AddProfileOptions
                            onExisting={() =>{auxAccount.current = -1; setCurrentWindow("login")}}
                            onNew = {() =>{setCurrentWindow("signin")}}
                            onCancel={() => setCurrentWindow("none")}
                        />
                    )}

                    {currentWindow === "signin" && (
                        <SignInForm
                            onCancel={() => setCurrentWindow("none")}
                        />
                    )}

                </PopUpElement>

            </div>
        </>
    );
}

function NewProfileOption(props) {
    return (
        <div onClick={props.onClick}>
            <img
                src={newPrpfileIcon}
                alt="new profile"
                className="profileCardBody"
            ></img>
        </div>
    );
}

function AddProfileOptions(props)
{
    return (

            <div className="genericWindow choiceWindow">

                <button onClick={()=>props.onExisting()}>Perfil Existente</button>
                <button onClick={()=>props.onNew()}>Novo Perfil</button>
                <button onClick={()=>props.onCancel()}>Voltar</button>

            </div>

    );
}

function ProfileCard(props)
{
    return (
        <div className="profileCardBody" onClick = {props.onClick}>
            {props.profile?props.profile.name:"sem nome"}
        </div>


    );
}


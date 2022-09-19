import "./HomePage.css";
import ProfileCard from "./ProfileCard";
import newPrpfileIcon from "./NewProfile.png";
import NewProfileForm from "./NewProfileForm";
import ExistingProfileLogin from "./ExistingProfileLogin";
import AddProfile from "./AddProfile";
import { useRef, useState } from "react";
import PopUpElement from "../PopUpElement";
import "../model/Profiles";
import {retrieveAllCahcedProfiles} from "./CachedProfiles";
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {
    const navigate = useNavigate();

    const [currentWindow, setCurrentWindow] = useState("none"); //none//login//login_add//signin//options

    var savedAccouts = retrieveAllCahcedProfiles();
    var auxAccount = useRef(-1);

    const teste = () => {
        return navigate("/app");
    };


    return (
        <>
            <div className="pseudoBody">
                <div className="profilesPlate">
                    {
                        savedAccouts.map((element,index) => {
                            console.log(element);
                            return <ProfileCard key={index} profile = {element} 
                            onClick = {()=>{auxAccount.current=index;setCurrentWindow("login")}}/>
    
                        })
                    }
                    
                    <NewProfile onClick={() => { setCurrentWindow("options"); }} />
                    <NewProfile onClick={teste} />
                </div>

                <PopUpElement Trigger={currentWindow !== "none"} onClick={() => setCurrentWindow("none")}>
                    {currentWindow === "login" && (
                        <ExistingProfileLogin
                            email = {savedAccouts[auxAccount.current]?.email}
                            onCancel={() => setCurrentWindow("none")}
                        />
                    )}

                    {currentWindow === "options" && (
                        <AddProfile
                            onExisting={() =>{auxAccount.current = -1; setCurrentWindow("login")}}
                            onNew = {() =>{setCurrentWindow("signin")}}
                            onCancel={() => setCurrentWindow("none")}
                        />
                    )}

                    {currentWindow === "signin" && (
                        <NewProfileForm
                            onCancel={() => setCurrentWindow("none")}
                        />
                    )}

                </PopUpElement>

            </div>
        </>
    );
}

function NewProfile(props) {
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

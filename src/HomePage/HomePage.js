import "./HomePage.css";
import ProfileCard from "./ProfileCard";
import newPrpfileIcon from "./NewProfile.png"
import NewProfileForm from "./NewProfileForm";
import { useState } from "react";

import BackgroundBlocker from "../BackgroundBlocker";
import GenericWindow from "../GenericWindow";

export default function HomePage() {
    const [isFormOpen,setIsFormOpen] = useState(false);
    
    return (
        <>
            <div className="pseudoBody">
                
                <div className="profilesPlate">

                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <NewProfile onClick={()=>{setIsFormOpen(true)}}/>
                </div>
                <NewProfileForm On={isFormOpen}
                onCancel = {()=>{setIsFormOpen(false)}}
                />




            </div>
        </>
    );
}


function NewProfile(props) {
    return (
        <div onClick={props.onClick}>
            <img src={newPrpfileIcon} alt="new profile" className="profileCardBody"></img>
        </div>
    );
}
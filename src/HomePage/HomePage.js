import "./HomePage.css";
import ProfileCard from "./ProfileCard";
import newPrpfileIcon from "./NewProfile.png"
import NewProfileForm from "./NewProfileForm";
import ExistingProfileLogin from "./ExistingProfileLogin";
import AddProfile from "./AddProfile";
import { useState } from "react";


export default function HomePage() {
    const [ExistingOpen,setExistingOpen] = useState(false);
    const [Existing2Open,setExisting2Open] = useState(false);
    const [NewOpen,setNewOpen] = useState(false);
    const [isAddProfile,setIsAddProfile] = useState(false);
    
    const handleLogIn = (email)=>
    {
        console.log("thanks for login in, "+email)
    }
    
    return (
        <>
            <div className="pseudoBody">
                
                <div className="profilesPlate">

                    <ProfileCard onClick={()=>{setExistingOpen(true)}}/>
                    <ProfileCard onClick={()=>{setExisting2Open(true)}}/>
                    <ProfileCard onClick={()=>{setNewOpen(true)}}/>
                    <NewProfile onClick={()=>{setIsAddProfile(true)}}/>
                </div>
                
               

                <ExistingProfileLogin Trigger={ExistingOpen}
                onCancel = {()=>{setExistingOpen(false)}}
                onLogIn = {handleLogIn}
                />

                <ExistingProfileLogin Trigger={Existing2Open}
                email = {"outro email"}
                onCancel = {()=>{setExisting2Open(false)}}
                onLogIn = {handleLogIn}
                />
                

                <NewProfileForm Trigger={NewOpen}
                onCancel = {()=>{setNewOpen(false)}
                }
                />


                <AddProfile  Trigger={isAddProfile}
                onCancel = {()=>{setIsAddProfile(false)}}
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
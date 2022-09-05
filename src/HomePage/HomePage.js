import "./HomePage.css";
import ProfileCard from "./ProfileCard";
import newPrpfileIcon from "./NewProfile.png"
import NewProfileForm from "./NewProfileForm";
import ProfileLogIn from "./ProfileLogIn";
import AddProfile from "./AddProfile";
import { useState } from "react";


export default function HomePage() {
    const [isSignInOpen,setIsSignInOpen] = useState(false);
    const [isLoginOpen,setIsLoginOpen] = useState(false);
    const [isAddProfile,setIsAddProfile] = useState(false);
    
    const handleLogIn = (email)=>
    {
        console.log("thanks for login in, "+email)
    }
    
    return (
        <>
            <div className="pseudoBody">
                
                <div className="profilesPlate">

                    <ProfileCard onClick={()=>{setIsLoginOpen(true)}}/>
                    <ProfileCard onClick={()=>{setIsAddProfile(true)}}/>
                    <ProfileCard />
                    <NewProfile onClick={()=>{setIsSignInOpen(true)}}/>
                </div>
                
                <NewProfileForm Trigger={isSignInOpen}
                onCancel = {()=>{setIsSignInOpen(false)}
                }
                />

                <ProfileLogIn Trigger={isLoginOpen}
                onCancel = {()=>{setIsLoginOpen(false)}}
                onLogIn = {handleLogIn}
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
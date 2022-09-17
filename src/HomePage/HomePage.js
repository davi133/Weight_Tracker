import "./HomePage.css";
import ProfileCard from "./ProfileCard";
import newPrpfileIcon from "./NewProfile.png";
import NewProfileForm from "./NewProfileForm";
import ExistingProfileLogin from "./ExistingProfileLogin";
import AddProfile from "./AddProfile";
import { useRef, useState } from "react";
import PopUpElement from "../PopUpElement";
import "../model/Profiles";
import Profile from "../model/Profiles";

export default function HomePage() {
    /*const [ExistingOpen,setExistingOpen] = useState(false);
      const [Existing2Open,setExisting2Open] = useState(false);
      const [NewOpen,setNewOpen] = useState(false);
      const [isAddProfile,setIsAddProfile] = useState(false);*/

    const [currentWindow, setCurrentWindow] = useState("none"); //none//login//login_add//signin//options

    var savedAccouts = [
        new Profile("davi", "davi@email.com"),
        new Profile("pedro", "pedro@email.com"),
    ];
    var auxAccount = useRef(-1);

    const teste = () => {
        //saveProfile(new Profile("davi","davi@email.com","54321"))
    };


    return (
        <>
            <div className="pseudoBody">
                <div className="profilesPlate">
                    <ProfileCard onClick={() => {auxAccount.current = 0; console.log('logando em "davi"');setCurrentWindow("login"); }} />
                    <ProfileCard onClick={() => {auxAccount.current = 1; console.log('logando em "pedro"'); setCurrentWindow("login");}} />
                    <NewProfile onClick={() => { setCurrentWindow("options"); }} />
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

                {/* 
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

                */}
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

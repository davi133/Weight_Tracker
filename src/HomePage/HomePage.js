import "./HomePage.css";
import ProfileCard from "./ProfileCard";
import newPrpfileIcon from "./NewProfile.png"

export default function HomePage()
{
    return (
        <>
        <div className="pseudoBody">
        <div className="profilesPlate">
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <NewProfile/>

        </div>
        </div>
        </>
    );
}


function NewProfile()
{
    return (
        <img src={newPrpfileIcon} alt="new profile" className="profileCardBody"></img>
    );
}
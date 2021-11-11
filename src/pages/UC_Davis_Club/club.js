import './club.css';
import Footer from "../footer/footer";
import intro_photo from "./group_roll.jpeg"

function UCDavisClub(props){
    return(
        <div>
            <div className="davis_club_container">
                <h1 className="club_title">UC Davis BJJ Club</h1>
                <img className="club_intro_photo" src={intro_photo} />

                <div className="club-info-card">
                    <h2>Club Membership</h2>
                    
                    <ul>
                        <li>Club Practice on Wednesdays 12-2pm hosted at Team Alpha </li>
                        <li>Access to all open mats</li>
                        <li>Access to all BJJ Club open mats at ARC</li>
                        <li>All for $25/mo</li>
                    </ul>
                </div>
            </div>

            <Footer/>
        </div>


    )
}

export default UCDavisClub
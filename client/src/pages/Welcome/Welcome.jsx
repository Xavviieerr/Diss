import react from 'react'
import "./Welcome.css"
import { Link } from "react-router-dom";
import welcomeSquirel from "../../assets/images/w-squirrel.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

const Weclome = () => {
    return <div className="welcome">
        <span className="welcomeLogo">Diss Pit</span>
        <div className="sideNote">
            <div>
                <h2 className="welcomeHeader">Diss Pit</h2>
                <div className="comic-neue-bold welcomeMainText">
                    Think you`ve got the sharpest tounge in town?
                    Prove it. 
                </div>
                <span className="welcomeSubText comic-neue-regular" >This is the arena for verbal
                     sparring, where wit is your weapon and humour is your shield,
                    Enter at your own risk, Just remember its all in good fun (unless you can`t take it).
                </span>
            </div>
            <Link to="../auth">
                <button className="welcomeButton">
                Enter the Diss Pit <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </Link>
        </div>
        <img className="welcomeSquirel" src={welcomeSquirel} alt="" />
    </div>
}

export default Weclome
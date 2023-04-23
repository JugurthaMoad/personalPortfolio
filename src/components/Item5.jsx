import { useRef, useState } from "react";
import ReactPlayer from 'react-player'
import Vid from "./vid.mp4"
const Item5 = ()=>{
    const ref= useRef();
    const handleClick = ()=>{
        setDisplay(true)
    }
    const handleOutClick = (e)=>{
        if(ref.current && !ref.current.contains(e.target)){
            setDisplay(false)
        }
    }
    // hide by default
    const [display, setDisplay] = useState(false)
    return(<div className="pro_desc">
        I created a web-based game that's responsive and accessible across all devices. To build the game, I utilized a range of cutting-edge front-end and back-end technologies. For the front-end, I used <span className="tech">JavaScript</span> and <span className="tech">ReactJS</span> to create an engaging and interactive user interface. I also implemented <span className="tech">CSS</span> to ensure a seamless and visually appealing experience. On the back-end, I leveraged <span className="tech">NodeJS</span> to handle server-side functionality and integrate with a NoSQL database, specifically <span className="tech">MongoDB</span>.
        <div className="links">
            <a
            href="https://betting-p63e.onrender.com/"
            target="blank"
            rel="noopener" 
            >
                View Site
            </a>
        </div>
        <div 
        onClick={handleClick}
        className="link">
        View demonstration
        </div>
        <div 
        onClick={(e)=> handleOutClick(e)}
        className={display ? "video_container":"hide"}>
            <div 
            ref={ref}
            className="video_content">
            <ReactPlayer 
                            url={Vid}
                            controls
                            className="messagin_video"
                            />
            </div>
        </div>
    </div>)
}

export default Item5;
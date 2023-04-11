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
    return(<div>
        This project is about creating a responsive web game with the use of :
        JavaScript, ReactJs, Css, NodeJs. 
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
import { useState, useRef } from 'react'

function VideoPlayer(){
    const [videoSrc, setVideoSrc] = useState(null)
    const videoRef = useRef(null)
    
    function handleSpeedChange(speed){
        videoRef.current.playbackRate = speed
    }

    function handleFileChange(event){
        const file = event.target.files[0]
        const url = URL.createObjectURL(file)
        setVideoSrc(url)
    }

    return (
        <div>
            <input type = "file" accept = "video/*" onChange = {handleFileChange}/>
            <video ref = {videoRef} src = {videoSrc} controls />
            <button onClick = {() => handleSpeedChange(0.25)}>0.25x</button>
            <button onClick = {() => handleSpeedChange(0.50)}>0.5x</button>
            <button onClick = {() => handleSpeedChange(0.75)}>0.75x</button>
            <button onClick = {() => handleSpeedChange(1.0)}>1x</button>
        </div>
    )
}

export default VideoPlayer
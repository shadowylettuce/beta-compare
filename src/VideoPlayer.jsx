import { useState, useRef } from 'react' // Importing useState and useRef functions from React library

function VideoPlayer(){ // Creating a function called VideoPlayer that creates a reusable component that renders a single video player with upload, speed control and bookmark functionality
    const [videoSrc, setVideoSrc] = useState(null) // useState(null) returns two things, a value and an updater function, here you are unpacking what useState gives back. videoSrc holds the video URL and null means no video loaded yet
    const videoRef = useRef(null) // useRef gives access to the video DOM elemetn so playback speed and current time can be controlled from JS
    const [bookmarks, setBookmarks] = useState([]) // Create a const that sets bookmarks to an empty list and calls the updater function

    function handleBookmark(){ // Creates a function called handleBookmark
        const time = videoRef.current.currentTime // Creates a var called time, that is set to the current time being played in the video
        setBookmarks([...bookmarks, time]) // Adds the new time to an array that has everything that was already in bookmarks plus the new time
    }

    function handleSpeedChange(speed){ // Creates a new function to handle the speed of the video
        videoRef.current.playbackRate = speed // sets the video's playback rate to the speed passed in as a parameter
    }

    function handleFileChange(event){ // Defines a function that takes event as a parameter. Event is auto passsed in by the browser whenever a file input changes. It contains info about what just happened
        const file = event.target.files[0] // event.target is the file input element, .files is the list of files the user selected and [0] grabs the first one since you only need one video
        const url = URL.createObjectURL(file) // Creates a temp URL from the file that was grabbed in the line above
        setVideoSrc(url) // Here is where setVideoSrc gets called, take the updater function that useState gave, pass in the url which is seen by React which goes ahead and updates videoSrc to the new URL and re-renders it
    }

    return ( 
        <div>
            <input type = "file" accept = "video/*" onChange = {handleFileChange}/>
            <video ref = {videoRef} src = {videoSrc} controls />
            <button onClick = {() => handleSpeedChange(0.25)}>0.25x</button>
            <button onClick = {() => handleSpeedChange(0.50)}>0.5x</button>
            <button onClick = {() => handleSpeedChange(0.75)}>0.75x</button>
            <button onClick = {() => handleSpeedChange(1.0)}>1x</button>
            <button onClick = {() => handleBookmark()}>Bookmark</button>
        </div>
    )
    // Our functions returns an input var that accets videos, that has 4 buttons to handle the speed, and a bookmark creation button. ref = {videoRef} which connects the video elemet to the ref so JS can control it
}

export default VideoPlayer // Exports everything in this file into the main app file
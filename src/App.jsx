import './App.css'
import VideoPlayer from './VideoPlayer'

function App() {
  return (
    <div>
      <h1>Beta Compare</h1>
      <div className = "video-container">
        <VideoPlayer inputId = "file-input1"/>
        <VideoPlayer inputId = "file-input2"/>
      </div>
    </div>
  )
}

export default App
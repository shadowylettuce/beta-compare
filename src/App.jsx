import './App.css'
import VideoPlayer from './VideoPlayer'

function App() {
  return (
    <div>
      <h1>Beta Compare</h1>
      <div className = "video-container">
        <VideoPlayer />
        <VideoPlayer />
      </div>
    </div>
  )
}

export default App
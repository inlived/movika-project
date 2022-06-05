import React from 'react'
import ReactPlayer from 'react-player'
import './App.css';
import Navbar from "./components/navbar/Navbar";
import MyButton from "./components/button/MyButton";

function App() {
    const urls = [
        'https://www.youtube.com/watch?v=a_IA-8nQ4FY',
        'https://www.youtube.com/watch?v=BrO01MX5EVI'
    ]
    const [currentUrlIndex, setCurrentUrlIndex] = React.useState(0)
    const [showNextButton, setShowNextButton] = React.useState(false)

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <ReactPlayer
                url={urls[currentUrlIndex]}
                playing
                controls
                onEnded={() => setShowNextButton(true)}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            />
            {showNextButton && (
                <MyButton
                    onClick={() => {
                        setCurrentUrlIndex(
                            prevUrlIndex => (prevUrlIndex + 1) % urls.length
                        )
                        setShowNextButton(false)
                    }}
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        fontSize: '2em'
                    }}
                >
                    next
                </MyButton>
            )}
        </div>
    )
}

export default App;

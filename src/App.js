import React from 'react'
import ReactPlayer from 'react-player'
import './App.css';
import MyButton from "./components/button/MyButton";

function App() {
    const urls = [
        'https://www.youtube.com/watch?v=a_IA-8nQ4FY',
        'https://www.youtube.com/watch?v=BrO01MX5EVI',
        'https://www.youtube.com/watch?v=jHWKtQHXVJg'
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
            <div
                style={{
                    borderRadius:'15px',
                    background:'fuchsia',
                    padding:'15px',
                    marginRight:'10px',
                    height:'370px',
                    color:'white'}}>
                <h1>Video Player with Cats</h1>
                <hr></hr>Relax and enjoy!
                <p><strong>Push the button to go to the next video</strong></p>
                <p><a href="https://drive.google.com/file/d/1o59J9B8uO_zvf_B47WjVkcoXwEP0H80f/view?usp=sharing">Darya Sidorenko</a> for Movika</p>
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
        </div>
    )
}

export default App;

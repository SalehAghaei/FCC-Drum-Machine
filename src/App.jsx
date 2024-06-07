import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const[activeKey, setActiveKey] = useState('');

  useEffect(()=>{
    document.addEventListener('keydown', (event)=>{
      playSound(event.key.toUpperCase());
    })
  }, []); 

  const drumPads = [
    {
      keycode: 81,
      text: 'Q',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'
    },
  
    {
      keycode: 87,
      text: 'W',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'
    },
  
    {
      keycode: 69,
      text: 'E',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'
    },
  
    {
      keycode: 65,
      text: 'A',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'
    },
  
    {
      keycode: 83,
      text: 'S',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'
    },
  
    {
      keycode: 68,
      text: 'D',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'
    },
  
    {
      keycode: 90,
      text: 'Z',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'
    },
  
    {
      keycode: 88,
      text: 'X',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'
    },
  
    {
      keycode: 67,
      text: 'C',
      src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
    }
  ]
  
  function playSound(parameter) {
    const sound = document.getElementById(parameter);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
      setActiveKey(parameter);
    }
  }
  

  return (
    <div id="drum-machine">
      <div id="display">{activeKey}</div>
      <div className="drum-pads">
        {drumPads.map((drumPad) =>
          <button key={drumPad.src} onClick={()=>{playSound(drumPad.text)}} className="drum-pad" id={drumPad.keycode}>
          <audio className="clip" id={drumPad.text} src={drumPad.src}></audio>{drumPad.text}
          </button>)}
      </div>  
    </div>
  )
}

export default App

import React from 'react';

import './App.css';
import Participants from './Participants';
import Participant from './Participant'
import Chats from './Chats';
import Chat from './Chat';


function App() {
  return (
    <div className="App">

      {
      Participants.participants.map(part => (
            <Participant key={part.id} name={part.name} avatar={part.avatar} inSession={part.inSession} onStage={part.onStage}/>
        ))
      
      
    }
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import Participants from './Participants';
import Participant from './Participant';
import Stage from './Stage';
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
    {
      Participants.participants.map(part => (
        <Stage key={part.id} name={part.name} avatar={part.avatar} inSession={part.inSession} onStage={part.onStage}/>
      ))
    }

    {
      Chats.chatEvents.map(chat =>(
        <Chat key={chat.timestamp} partId={chat.participantId} type={chat.type} message={chat.message} time={chat.time} timestamp={chat.timestamp}/>
      ))
    }
    </div>
  );
}

export default App;

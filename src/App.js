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
      <div id="content-wrapper">
      <div id="chat-container">
    {
      Chats.chatEvents.map(chat =>(
        <Chat key={chat.timestamp} partId={chat.participantId} type={chat.type} message={chat.message} time={chat.time} timestamp={chat.timestamp}/>
      ))
    }
    </div>
      <div id="participant-container">
    {
      Participants.participants.map(part => (
            <Participant key={part.id} name={part.name} avatar={part.avatar} inSession={part.inSession} onStage={part.onStage}/>
        ))
    }
    </div>
    <div id="stage-container">
    {
      Participants.participants.map(part => (
        <Stage key={part.id} name={part.name} avatar={part.avatar} inSession={part.inSession} onStage={part.onStage}/>
      ))
    }
    </div>
    
    </div>
    </div>
  );
}

export default App;

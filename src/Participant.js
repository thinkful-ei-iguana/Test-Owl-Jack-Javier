import React from 'react';
import './Participant.css';

export default function Particpant({key,name,avatar,inSession,onStage}){
    console.log(key,name,avatar,inSession,onStage)

    let stageText = '';
    let sessText ='';

    if(onStage){
        stageText = 'On Stage'
    } else {
        stageText = 'Observing'
    }
    if(inSession){
        sessText = 'in-session';
    } else {
        sessText = 'not-in-session';
    }

    return (
        <div className="participant" className={sessText}>
            <img className="avatar" src={avatar} alt="user icon"/>
            <h3 className="name">{name}</h3>
            <p className="onStage">{stageText}</p>
        </div>
    );
}
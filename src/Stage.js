import React from 'react';
import './stage.css'

export default function Stage({key,name,avatar,inSession,onStage}){
    if(onStage){
        return (
        <div id="stage-container">
            <div className="stage">
            <img className="avatar" src={avatar} alt="user icon"/>
            <h3 className="name">{name}</h3>
        </div>
        </div>
        );
    }

    return null;
}
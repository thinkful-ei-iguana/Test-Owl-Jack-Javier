import React from 'react';

export default function Stage({key,name,avatar,inSession,onStage}){
    if(onStage){
        return (
            <div className="stage">
            <img className="avatar" src={avatar} alt="user icon"/>
            <h3 className="name">{name}</h3>
        </div>
        );
    }

    return null;
}
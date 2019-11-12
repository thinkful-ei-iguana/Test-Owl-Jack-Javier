import React from 'react';
import Participants from './Participants';


export default function Chat({partId,type, message, time, timestamp}){
    //console.log(partId, type, message, time);
    let partName = Participants.participants.find((element) => { 
        //console.log('element is ' + element.name);
        
        if(element.id === partId){
            //console.log('yay we did it');
            return element.name;
        }
    });
    //console.log('partName is ' + partName.name);
    let statement = '';

    switch(type){
        case'join-stage':
            statement = `${partName.name} joined the stage`;
        break;
        case'leave-stage':
            statement = `${partName.name} left the stage`;
        break;
        case'message':
    
        break;
        case'thumbs-up':
            statement = `${partName.name} gave a thumbs up`;
        break;
        case'thumbs-down':
            statement = `${partName.name} gave a thumbs down`;
        break;
        case'join':
            statement = `${partName.name} joined`;
        break;
        case'leave':
            statement = `${partName.name} left`;
        break;
        case'clap':
            statement = `${partName.name} clapped`;
        break;
        case'raise-hand':
            statement = `${partName.name} raised their hand`;
        break;
        default :
        break;
    }

    if(type !== 'message'){
        return (
            <div className='chat-item-not-message'>{statement}</div>

        );
    } else {
        const date = new Date(time).toLocaleTimeString('en-US');
        return (
            <div className='chat-item-message'>
                <img className="chat-image" src={partName.avatar} alt="user avatar" /> 
                <p className="chat-name-and-time">{partName.name} {date}</p>  
                <p className="chat-message">{message}</p>  
            </div>
    
        );
    }

}


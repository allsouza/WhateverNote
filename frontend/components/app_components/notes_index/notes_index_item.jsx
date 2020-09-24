import React from 'react';

export default function NotesIndexItem({note, openNote}){
    return(
        <li className="note-item" onClick={e => openNote(e, note.id)}>
            <h3>{note.title}</h3>
            <p className="body">{sample(note.body)}</p>
            <p className="date">{formatDate(new Date(note.updated_at))}</p>
        </li>
    )
}

function formatDate(date){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const now = new Date();
    let displayDate=`${months[date.getMonth()]} ${date.getDate()}`;

    if(date.getDate() === now.getDate()-1){
        displayDate = "Yesterday";
    }
    else if(now.getDate() === date.getDate()){
        if((now-date)/60000 < 60){ // Calculates if within same hour
            if((now-date)/1000 < 60){ // Calculates if with last minute
                displayDate = "a few seconds ago"
            }
            else{
                if((now-date)/60000 < 5){
                    displayDate = "a few minutes ago"
                }
                else{
                    displayDate = `${Math.floor((now-date)/60000)} minutes ago`
                }
            }
        }
        else{
            const hours = Math.floor((now-date)/3600000);
            if(hours === 1)
                displayDate = "1 hour ago"
            else{
                displayDate = `${hours} hours ago`
            }
        }
    }
    return displayDate
    // Calculations from https://www.htmlgoodies.com/html5/javascript/calculating-the-difference-between-two-dates-in-javascript.html#:~:text=Calculating%20the%20Difference%20between%20Two%20Known%20Dates&text=The%20function%20to%20do%20that,returns%20the%20difference%20in%20milliseconds.
}

function sample(text){
    if(text.length < 80){
        return text
    }
    else{
        return `${text.split(" ").filter(ele=>ele!=="").join(" ").slice(0,80)}...`
    }
}
import React from 'react';

export default function Tags({tags, show, close}) {
    if(show){
        const divided = new Object({});
        tags.forEach(tag => {
            const key = tag.name[0].toUpperCase();
            divided[key] = typeof divided[key] !== 'undefined' ? [...divided[key], tag] : [tag]
        })

     return(
        <div className='tags-modal' onClick={close}>
            <div className='tags' onClick={e => e.stopPropagation()}>
                <div className="header">
                    <h1>Tags</h1>
                    <i className="fas fa-plus"></i>
                </div>
                <ul>
                    {Object.keys(divided).map(key => {
                        return(
                            <li key={key}>
                                {key}
                                <ul>
                                    {divided[key].map(tag => {
                                        return(
                                            <li key={tag.id}>
                                                {tag.name}
                                            </li>
                                            )   
                                    })}
                                </ul>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        </div>
    )}
    else{
        return null;
    }
}
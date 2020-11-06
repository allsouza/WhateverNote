import React, {useEffect} from 'react';

export default function TagSidebar({fetchTags, tags}) {
    useEffect(fetchTags, [])
    
    const listTags = () => {
        return tags.map(tag => {
            return (<li key={tag.id}>
                <i className="fas fa-tag"></i> {tag.name}
            </li>)
        })
    }
    
    return(
        <ul className="tags-sidebar">
            {listTags()}
        </ul>
    )
}
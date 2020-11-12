import React from 'react';
import EditorTag from './editor_tag_item';

export default function EditorTags({tags}) {
    return(
        <ul>
            {tags.map(tag => <EditorTag tag={tag} key={tag.id}/>)}
        </ul>
    )
}
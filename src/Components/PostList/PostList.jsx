import React, { useState } from 'react';
import Post from './Components/Post/Post';


const PostList = (props) => {
    return ( 
        <div>
            {props.parentEntries.map((entry) => {
                return (
                    <div>
                        <Post parentEntry={entry}/>
                    </div>
                );
            })}
        </div>
     );
}
 
export default PostList;
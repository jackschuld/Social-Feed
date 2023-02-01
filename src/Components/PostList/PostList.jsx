import React from 'react';
import Post from '../Post/Post';

const PostList = (props) => {
    return ( 
        <div>
        {props.parentEntries.map((entry) => {
            return (
                <Post entryPost = {entry}/>
            );
        })}
        </div>
     );
}
 
export default PostList;
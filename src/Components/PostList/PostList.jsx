import React from 'react';
import Post from '../Post/Post';

const PostList = (props) => {
    return ( 
        <table>
            <tbody>
            {props.parentEntries.map((entry) => {
                return (
                    <Post entryPost = {entry}/>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default PostList;
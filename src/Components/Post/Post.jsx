import React from 'react';


const Post = (props) => {
    return (
        <div>
            <tr>
                <td>{props.entryPost.name}</td>
            </tr>
            <tr>
                <td>{props.entryPost.post}</td>
            </tr>
            <tr>
                <button>Like</button>
                <button>Dislike</button>
            </tr>
        </div>
     );
}
 
export default Post;

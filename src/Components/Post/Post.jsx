import React, { useState } from 'react';


const Post = (props) => {
    return ( 
        <form>
            <label>Name</label>
            <input type='number' />
            <label>Post</label>
            <input type='number' />
            <button>Create</button>
        </form>
     );
}
 
export default Post;
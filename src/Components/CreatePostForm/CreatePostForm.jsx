import React, { useState } from 'react';


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPostProperty(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Post</label>
                <input type='text' className='form-control' value={post} onChange={(e) => setPost(e.target.value)}/>
            </div>
            <div className='create-button'>
                <button type='submit' className='btn btn-primary'>Create</button>
            </div>
        </form>
     );
}
 
export default CreatePostForm;
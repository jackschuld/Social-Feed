import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {

  const [posts, setPosts] = useState([{name: 'stoutishgoat5', post: 'RIP Crosby'}, {name: 'Pardog', post: 'Woof!'}])
  
  function addNewPost(post) {
    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
  }


  return (
    <div className='container-fluid g-0'>
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='body'>
        <div className='new-post'>
          <CreatePostForm addNewPostProperty={addNewPost}/>
        </div>
        <div className='post-list'>
          <PostList parentEntries={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;

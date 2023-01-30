import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState([{name: 'stoutishgoat583', post: 'RIP Crosby'}, {name: 'Pardog', post: 'Woof!'}])
  
  function addNewPost(post) {
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }


  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPostProperty={addNewPost}/>
      <PostList parentEntries={posts}/>
    </div>
  );
}

export default App;

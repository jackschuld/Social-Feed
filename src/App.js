import React, { useState } from 'react';
import Post from './Components/Post/Post';
import PostList from './Components/PostList/PostList';

function App() {

  const [entries, setEntries] = useState([{name: 'stoutishgoat583', post: 'RIP Crosby'}, {name: 'Pardog', post: 'Woof!'}])
  
  return (
    <div>
      <PostList parentEntries={entries, Post}/>
    </div>
  );
}

export default App;

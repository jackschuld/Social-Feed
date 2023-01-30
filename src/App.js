import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [entries, setEntries] = useState([{name: 'stoutishgoat583', post: 'RIP Crosby'}, {name: 'Pardog', post: 'Woof!'}])
  
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <CreatePostForm />
      </div>
      <div>
        <PostList parentEntries={entries}/>
      </div>
    </div>
  );
}

export default App;

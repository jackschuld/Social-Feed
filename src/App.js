import React, { useState } from 'react';
import Post from './Components/Post/Post'

function App() {

  const [posts, newPosts] = useState([])
  return (
    <div>
      <Post postEntries={entries}/>
    </div>
  );
}

export default App;

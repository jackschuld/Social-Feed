import React, { useState } from 'react';


const Post = (props) => {
    return ( 
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <td>{props.post}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </form>
     );
}
 
export default Post;

{/* <form>
<div>
    <label>Name</label>
    <input type='text' />
</div>
<div>
    <label>Post</label>
    <input type='text' />
</div>
<button>Create</button>
</form> */}
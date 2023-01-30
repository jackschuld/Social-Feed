import React, { useState } from 'react';

const PostList = (props) => {
    return ( 
        <table>
            <tbody>
            {props.parentEntries.map((entry) => {
                return (
                <div>
                    <tr>
                        <td>{entry.name}</td>
                    </tr>
                    <tr>
                        <td>{entry.post}</td>
                    </tr>
                    <tr>
                        <button>Like</button>
                        <button>Dislike</button>
                    </tr>
                </div>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default PostList;
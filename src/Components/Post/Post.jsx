import React, {useState} from 'react';


const Post = (props) => {

    const [likeButtonClass, setLikeClass] = useState('inactive');
    const [dislikeButtonClass, setDislikeClass] = useState('inactive')

    function handleLikeClick() {
        if(likeButtonClass==='inactive'){
            setLikeClass('active');
            if(dislikeButtonClass==='active'){
                setDislikeClass('inactive');
            }
        }
        else {
            setLikeClass('inactive');
        }
    }

    function handleDislikeClick() {
        if(dislikeButtonClass==='inactive'){
            setDislikeClass('active');
            if(likeButtonClass==='active'){
                setLikeClass('inactive');
            }
        }
        else {
            setDislikeClass('inactive');
        }
    }


    return (
        <div className='post-entry'>
            <div>
                <span>{props.entryPost.name}</span>
            </div>
            <div>
                <span>{props.entryPost.post}</span>
            </div>
            <span className='buttons'>
                <div className='like'>
                    <button className={likeButtonClass} onClick={handleLikeClick}/>
                </div>
                <div className='dislike'>
                    <button className={dislikeButtonClass} onClick={handleDislikeClick}/>
                </div>
            </span>
        </div>
     );
}
 
export default Post;

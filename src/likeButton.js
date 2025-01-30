import React, { useState } from "react";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

function LikeDislikeButton({ card_id, button_id }) {
    const [likeStatus, setLikeStatus] = useState('none');
    let index = card_id.findIndex(item => item === button_id);

    const handleLikeClick = () => {

        // If dislike is active, deactivate it and activate like

        if (card_id[index] === button_id) {
            if (likeStatus === 'dislike') {
                setLikeStatus('like');
            } else {
                // If like is already active, deactivate it (toggle functionality)
                setLikeStatus(likeStatus === 'like' ? 'none' : 'like');
            }
        }


    };

    const handleDislikeClick = () => {
        if (card_id[index] === button_id) {
            // If like is active, deactivate it and activate dislike
            if (likeStatus === 'like') {
                setLikeStatus('dislike');
            } else {
                // If dislike is already active, deactivate it (toggle functionality)
                setLikeStatus(likeStatus === 'dislike' ? 'none' : 'dislike');
            }

        }

    };

    return (
        <>
            {likeStatus === 'like' ? <AiFillLike color="blue" size='20' onClick={handleLikeClick} /> : <AiFillLike color="black" size='20' onClick={handleLikeClick} />}

            {likeStatus === 'dislike' ? <AiFillDislike
                color="red"
                size="20"
                onClick={handleDislikeClick} /> : <AiFillDislike
                color="black"
                size="20"
                onClick={handleDislikeClick} />}
        </>

    )




}

export default LikeDislikeButton;
import React, {useState, useEffect } from "react";

import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

function LikeButton() {
    const [like, setLike ] = useState(false);
    const [dislike, setDislike] = useState(false);
    function handleClick () {
        setLike(!like);
        setDislike(!dislike);
    }
    if(like && dislike) {
        return (
            <>
             
            <AiFillLike color="blue"  size='20' onClick={handleClick}/>
            
            </>
        ) 
    } else {
        return (
            <>
           
            <AiTwotoneLike size='20'  color="black" onClick={handleClick} />
            
            </>
           
        )
      
    }
          
   

}

export default LikeButton;
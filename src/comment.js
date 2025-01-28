import React, { useEffect, useState } from "react";
import commentbutton from './image/comment-white-oval-bubble.png';
import style from './css/comment.module.css';
import popularRedditImage from "./image/popularReddit.png";
import ReactMarkdown from "react-markdown";
function Comment({  loading,  cardComment }) {
    const [cardCommentData, setCardCommentData] = useState([]);
  
      
    
    return (
        <>
            {
                loading ? <p>Loading Comments</p> : 
               
                                    <div className={style.comment_Box}>
                  { cardComment.map(comment => {
                    return (
                        <>
                            <img src={popularRedditImage} alt=""></img>
                             <h4><ReactMarkdown>{comment.data.author}</ReactMarkdown></h4>
                           <p><ReactMarkdown>{comment.data.body}</ReactMarkdown></p>
                        </>
                    )})}
                </div>
                

                
            }
        </>
    )
}

export default Comment;
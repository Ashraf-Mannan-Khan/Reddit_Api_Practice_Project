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
                loading ? <div>
                     <p className={style.loading}>Loading Comments</p>
                     <div class="loader"></div>
                </div>
               
                
                :<div className={style.comment_Box}>
                  { cardComment.map(comment => {
                    return (
                        <>
                            <div className={style.comment_img_author_container}>
                            <img src={popularRedditImage} alt="" className={style.image}></img>
                            <h4 className={style.author}><ReactMarkdown>{comment.data.author}</ReactMarkdown></h4>
                            </div>
                            
                           <p className={style.body}><ReactMarkdown>{comment.data.body}</ReactMarkdown></p>
                        </>
                    )})}
                </div>
                

                
            }
        </>
    )
}

export default Comment;
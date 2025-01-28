import { react, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import he from "he";
import style from './css/card.module.css';
import reddit from './image/reddit.png';
import image_or_video from './image/sample-image.webp';

import uparrowOnClick from './image/up-arrow-arrows-svgrepo-com (1).svg';
import downarrow from './image/down-arrow-svgrepo-com.svg';
import downarrowOnClick from './image/down-arrow-download-svgrepo-com (1).svg';
import sharebutton from './image/share.png';
import commentbutton from './image/comment-white-oval-bubble.png';
import uparrow from './image/up-arrow-svgrepo-com.svg';
import LikeButton from "./likeButton";
import DislikeButton from "./dislikeButton";
import Comment from "./comment";
function Card({ query = "" }) {
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [post_id, setPost_id] = useState('');
    const [subReddit, setSubReddit] = useState('');
    const [cardData, setCardData] = useState([]);
    const [cardComment, setCardComment] = useState([]);
    async function fetchData() {
        const url = `https://www.reddit.com/${query}.json?limit=10`;
        try {
            const data = await fetch(url, {
                method: "GET",
                "Content-Type": "application/json",
            });
            const response = await data.json();

            setCardData(response.data.children);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchData();
        console.log("Updated Reddit Data:", cardData);


    }, [query]);

    async function fetchComment(post_id, subReddit) {
        setLoading(true);  // Start loading
        const url = `https://www.reddit.com/r/${subReddit}/comments/${post_id}.json?sort=top`;
        try {
            const data = await fetch(url, {
                method: "GET",
                "Content-Type": "application/json",
            });
            const response = await data.json();
            setCardComment(response[1].data.children.slice(0, 9));  // Store all comments
            setLoading(false);  // End loading
        } catch (error) {
            console.error(error);
            setLoading(false);  // End loading on error
        }
    }

    console.log("Updated Reddit Data:", cardData);
    console.log(query);

    return (
        <>
            <div className={style.mainHead}>
                {cardData.map(item => {
                    let currentUps = item.data.ups;
                    return (

                        <div className={style.card}>
                            <div className={style.card_User_Details}>
                                <div className={style.userDetails}>
                                    <img src={reddit} alt="userimage" className={style.userimage} />
                                    <p className={style.username}>{item.data.subreddit_name_prefixed}</p>
                                </div>
                                <div className={style.join_and_svg_cont}>
                                    <button className={style.join_button}>Join</button>
                                    <span class="flex"><svg rpl="" fill="currentColor" height="16" icon-name="overflow-horizontal-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path> </svg></span>
                                </div>
                            </div>
                            <div className={style.image_or_video_Cont} >
                                <h2><ReactMarkdown>{he.decode(item.data.title)}</ReactMarkdown></h2>
                                <h6><ReactMarkdown>{item.data.selftext}</ReactMarkdown></h6>
                                {!item.data.is_video && item.data.url_overridden_by_dest && item.data.preview &&
                                    <img src={item.data.url} alt="" className={style.image_or_video}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = item.data.thumbnail;
                                        }} />}
                                {item.data.is_video && item.data.url_overridden_by_dest &&
                                    <video width="420" height="420" muted={false} controls>
                                        <source src={item.data.media.reddit_video.fallback_url} type="video/mp4" />

                                        <source src={item.data.url_overridden_by_dest} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>}


                            </div>
                            <div className={style.like_button_comment_button_share_cont}>
                                <div className={style.like_button_cont}>
                                    <button className={style.like_button}>
                                        {/* <img src={ uparrow } className={style.uparrow} onClick={(e) => {
                                            setLikeClicked(!likeClicked);
                                           
                                            e.target.src = !likeClicked ? uparrow : uparrowOnClick;
                                           
                                           

                                        }

                                        } /> */}
                                        <LikeButton />
                                       
                                        
                                        <span>{currentUps}</span>
                                       
                                    </button>
                                    <button className={style.dislike_button}>
                                      
                                            <DislikeButton />
                                    </button>
                                </div>
                                <div className={style.comment_button_cont}>
                                    <button className={style.comment_button} onClick={() => {
                                        setPost_id(item.data.id);
                                        setSubReddit(item.data.subreddit);
                                        fetchComment(item.data.id, item.data.subreddit);
                                    }}>
                                        <img src={commentbutton} className={style.comment_image}></img>
                                        <span>{item.data.num_comments}</span>
                                    </button>
                                </div>
                                <div className={style.share_button_cont}>
                                    <button className={style.share_button}>
                                        <img src={sharebutton} className={style.share_image}></img>
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                           {post_id === item.data.id && <Comment post_id={post_id} subReddit={subReddit} cardComment={cardComment} loading={loading} /> }
                        </div>

                    )
                })}



                {/* <div className={style.card_User_Details}>
                <div className={style.userDetails}>
                    <img src={reddit} alt="userimage" className={style.userimage} />
                    <p className={style.username}>r/username</p>
                </div>
                <div className={style.join_and_svg_cont}>
                    <button className={style.join_button}>Join</button>
                    <span class="flex"><svg rpl="" fill="currentColor" height="16" icon-name="overflow-horizontal-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path> </svg></span>
                </div>
            </div>
            <div className={style.image_or_video_Cont} >
                <img src={image_or_video} alt="" className={style.image_or_video} />
            </div>
            <div className={style.like_button_comment_button_share_cont}>
                <div className={style.like_button_cont}>
                    <button className={style.like_button}>
                        <img src={uparrow} className={style.uparrow}></img>
                        <span>32</span>
                    </button>
                    <button className={style.dislike_button}>
                        <img src={downarrowOnClick} className={style.downarrow}></img>
                    </button>
                </div>
                <div className={style.comment_button_cont}>
                    <button className={style.comment_button}>
                        <img src={commentbutton} className={style.comment_image}></img>
                        <span>40</span>
                    </button>
                </div>
                <div className={style.share_button_cont}>
                    <button className={style.share_button}>
                        <img src={sharebutton} className={style.share_image}></img>
                        <span>Share</span>
                    </button>
                </div>
            </div> */}
            </div>
        </>

    );

}

export default Card;
import react, { use } from "react";
import { useState, useEffect } from "react";
import style from './css/popular.module.css';
import popularRedditImage from "./image/popularReddit.png";
import reddit from './image/reddit.png';
import Fetch from "./fetch";
import Card from "./card";
import SideNavigation from "./navigation"

function PopularReddit({setSearchView, query, setPopularQuery}){
    const [seeMore, setSeeMore] = useState(true);
    const [redditdata, setRedditdata] = useState([]);
    async function fetchData() {
        const url =` https://www.reddit.com/r/popular.json`
        try {
            const data = await fetch(url, {
                method: "GET",
                "Content-Type": "application/json",
            });
            const response = await data.json();
         
            setRedditdata(response.data.children);

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchData();
      
    },[query ]);

    return (
        <>
            
                <div  className={style.container} >
                <h1 className={style.main_heading}>Popular Communitties</h1>
                <div style={seeMore ? {height: 200} : {}} className={style.popular_reddits}>
                    
                        {redditdata.map(item => {
                            return(
                                <>
                               <div  className={style.popular_reddit } onClick={() => {
                                setPopularQuery(item.data.subreddit_name_prefixed);
                                setSearchView(false);
                               }
                                }  >
                                <div>
                                <img src={popularRedditImage} className={style.popular_reddit_img}></img>
                                </div>
                                <div className={style.popular_reddit_details}>
                                <h3 className={style.popular_reddit_detail_heading} >{item.data.subreddit_name_prefixed}</h3>
                                <p className={style.popular_reddit_detail_paragraph}>{item.data.subreddit_subscribers} Members</p>
                                </div>
                                </div>
                                </>
                            )
                        })}
                </div>
                <button className={style.see_more_button}  onClick={ () => setSeeMore(!seeMore)} >{seeMore ? "See More" : "See less"} </button>
            </div>

        </>
    )
}

export default PopularReddit;

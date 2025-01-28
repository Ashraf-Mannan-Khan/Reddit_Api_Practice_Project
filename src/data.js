import react from "react";
import { useState, useEffect } from "react";
import popularRedditImage from "./image/popularReddit.png";
 function  Data() {
  const [redditdata, setRedditdata]= useState([]);
    async function fetchData() {
        const url =   "https://www.reddit.com/r/popular.json"


        try{
            const data = await fetch(url, {
                method: "GET",
                "Content-Type": "application/json",
            });
            const response = await data.json();
           console.log(response);
           setRedditdata(previtems => [...previtems, ...response.data.children]);
           
        } catch(error) {
            console.log(error);
        }
        
    }
   useEffect(() => {
        console.log("Updated Reddit Data:", redditdata);
        console.log(typeof redditdata);
      }, [redditdata]);

    return (
        <>
         <div>
             <button onClick={fetchData}>search for data</button>
            {redditdata.map((item, index) => {
                return (
                    <>
                    <img src={popularRedditImage}/>
                    <h2>{item.data.subreddit_name_prefixed}</h2>
                    <p>{item.data.subreddit_subscribers}</p>                    
                    </>

                )
            })}
        </div>
       
            
        </>
       
        
    )
}

export default Data;
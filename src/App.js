import React from "react";
import { useState } from "react";
import Header from './header'
import Card from './card';
import Data from './data'
import PopularReddit from "./popluarreddit";
import ReactMarkdown from "react-markdown";
import Fetch from "./fetch";
import SideNavigation from './navigation';
import Comment from './comment';
import LikeButton from './likeButton';
import DislikeButton from "./dislikeButton";
function App() {
  const [query, setQuery] = useState('');
  return (
    <>

   
      <Header setSearchQuery= {setQuery} searchQuery={query}/>
      <SideNavigation setNavQuery={setQuery} />
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem"
      }}>
        <div>
        <Card query={query} />
        </div>
        <div>
        <PopularReddit query={query} setPopularQuery={setQuery} />
        </div>
        
      </div>
      

    </>

  );
}

export default App;

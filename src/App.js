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
import LikedislikeButton from './likeButton';
import DislikeButton from "./dislikeButton";
function App() {
  const [query, setQuery] = useState('');
  const [searchView, setSearchView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      
   
      <Header searchQuery={searchQuery}  setSearchQuery={setSearchQuery} setSearchView={setSearchView}/>
      <SideNavigation setNavQuery={setQuery} setSearchView={setSearchView} />
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem"
      }}>
        <div>
        <Card query={query} searchView={searchView} searchQuery={searchQuery}/>
        </div>
        <div>
        <PopularReddit query={query} setPopularQuery={setQuery} setSearchView={setSearchView} />
        </div>
        
      </div>
      

    </>

  );
}

export default App;

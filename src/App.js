import React from "react";
import { useState } from "react";
import Header from './header'
import Card from './card';
import Data from './data';
import style from './css/app.module.css';
import PopularReddit from "./popluarreddit";
import ReactMarkdown from "react-markdown";
import Fetch from "./fetch";
import SideNavigation from './navigation';
import Comment from './comment';
import LikedislikeButton from './likeButton';


function App() {
  const [query, setQuery] = useState('');
  const [searchView, setSearchView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [changeDisplay, setChangeDisplay ] = useState('none');
  return (
    <>
      
   
      <Header searchQuery={searchQuery}  setSearchQuery={setSearchQuery} setSearchView={setSearchView} changeDisplay={changeDisplay} setChangeDisplay={setChangeDisplay}/>
      <SideNavigation setNavQuery={setQuery} setSearchView={setSearchView} changeDisplay={changeDisplay} />
      <div className={style.card_popular_container} >
        <div>
        <Card query={query} searchView={searchView} searchQuery={searchQuery} setSearchView={setSearchView} setSearchQuery={setSearchQuery}/>
        </div>
        <div>
        <PopularReddit query={query} setPopularQuery={setQuery} setSearchView={setSearchView} />
        </div>
        
      </div>
      

    </>

  );
}

export default App;

import React, {useState, useEffect} from "react";
import reddit from './image/reddit.png';
import style from './css/header.module.css';

function Header({searchQuery, setSearchQuery, setSearchView}) {
  
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchView(true);
        setSearchQuery(searchQuery);
    };
    return (
        <header className={style.header}>

            <div className={style.headerStyle}>
                <div className={style.logocont}>
                    <div className={style.menucont}>

                        <div className={style.menu}></div>
                        <div className={style.menu}></div>
                        <div className={style.menu}></div>
                    </div>
                    <div className={style.innerHeader}>
                        <img src={reddit} alt="helllo" className={style.logoimg} />
                        <p className={style.logo}>ASH<span className={style.logoRed}>REDDIT</span></p>
                    </div>
                </div>
                <div className={style.inputcont}>
                <form onSubmit={handleSearch} className={style.searchForm}>
            <input
            
                type="text"
                placeholder="Search Reddit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={style.searchBar}
            />
            <button type="submit" className={style.searchButton}>Search</button>
        </form>
                <button className={style.login}>Login</button>
                </div>
                

            </div>
        </header>
    )
}

export default Header;
import React from "react";
import reddit from './image/reddit.png';
import style from './css/header.module.css';

function Header({searchQuery , setSearchQuery}) {


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
                <input className={style.searchBar} type="search" value={searchQuery} id="search" name="search" placeholder="Search..." onChange={(e)=> setSearchQuery("search." + e.target.value )}/>
                <button className={style.login}>Login</button>
                </div>
                

            </div>
        </header>
    )
}

export default Header;
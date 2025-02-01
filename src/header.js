import React, {useState, useEffect, use} from "react";
import reddit from './image/reddit.png';
import style from './css/header.module.css';

function Header({searchQuery, setSearchQuery, setSearchView, changeDisplay ,setChangeDisplay}) {
    const [toggle, setToggle] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchView(false);
        setSearchQuery(searchQuery);
         setToggle(false);
    };
    return (
        <header className={style.header}>

            <div className={style.headerStyle}>
                <div className={style.logocont}>
                    <div className={style.menucont} onClick={() => {
                        setChangeDisplay('block');
                        if(changeDisplay === 'block') {
                            setChangeDisplay('none');
                        }
                    }}>

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
                onChange={(e) => setSearchQuery(e.target.value)
                   
                }
                className={style.searchBar}
                onClick={ () => setToggle(true)}
            />
            <button type="submit" className={style.searchButton} onClick={()=> setSearchView(true)} style={toggle ? {display: 'block'}: {display: "none"}}>Search</button>
        </form>
                
                </div>
                <button className={style.login}>Login</button>

            </div>
        </header>
    )
}

export default Header;
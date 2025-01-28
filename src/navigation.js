import React, { useState } from "react";
import style from './css/sidenavigation.module.css';

function SideNavigation({setNavQuery}) {
    
    return (
        <>
        <nav className={style.navigation}>
            <div className={style.main_nav}>
            <ul className={style.main_nav_list}>
                <li className={style.main_nav_item} onClick={()=> setNavQuery('r/home')}>
                    
                <svg rpl="" fill="currentColor" height="20" icon-name="home-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"> <path d="m17.71 8.549 1.244.832v8.523a1.05 1.05 0 0 1-1.052 1.046H12.73a.707.707 0 0 1-.708-.707v-4.507c0-.76-1.142-1.474-2.026-1.474-.884 0-2.026.714-2.026 1.474v4.507a.71.71 0 0 1-.703.707H2.098a1.046 1.046 0 0 1-1.052-1.043V9.381l1.244-.835v9.158h4.44v-3.968c0-1.533 1.758-2.72 3.27-2.72s3.27 1.187 3.27 2.72v3.968h4.44V8.549Zm2.04-1.784L10.646.655a1.12 1.12 0 0 0-1.28-.008L.25 6.765l.696 1.036L10 1.721l9.054 6.08.696-1.036Z"></path> </svg><span className={style.home}>Home</span>
                    </li>
                <li className={style.main_nav_item} onClick={()=> setNavQuery('r/popular')}>
                <svg rpl="" fill="currentColor" height="20" icon-name="popular-fill" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm4 13.791L10.812 10.6l-6.245 6.247a8.92 8.92 0 0 1-1.414-1.414L9.4 9.188 6.209 6h7.778l.013.638v7.153Z"></path> </svg> <span className={style.popular}>Popular</span>
                    </li>
            </ul>
            </div>
            <hr className={style.hr}></hr>
            <div className={style.Topic}>
            <details className={style.main_nav_Topic} open>
                <summary className={style.main_nav_Topic_summary}>Topic</summary>
                <p className={style.main_nav_Topic_item}>Games</p>
                <p className={style.main_nav_Topic_item} >Q&As</p>
                <p className={style.main_nav_Topic_item} >Technology</p>
                <p className={style.main_nav_Topic_item} >Pop Culture</p>
                <p className={style.main_nav_Topic_item} >Movies & TV</p>
                <p className={style.main_nav_Topic_item} >Anime</p>
                <p className={style.main_nav_Topic_item} >Arts</p>
                <p className={style.main_nav_Topic_item} >Buisness</p>
                <p className={style.main_nav_Topic_item} >Food & Drink</p>
                <p className={style.main_nav_Topic_item} >Music</p>
                <p className={style.main_nav_Topic_item} >News & Politics</p>
                <p className={style.main_nav_Topic_item} >Home & Garden</p>
                <p className={style.main_nav_Topic_item} >Science</p>
                <p className={style.main_nav_Topic_item} >Vehicles</p>
                <p className={style.main_nav_Topic_item} >Wellnes</p>
                <p className={style.main_nav_Topic_seeMore}>See More</p>
            </details>
            
            </div>
            <hr className={style.hr}></hr>
            <div className={style.main_nav_Resources_div}>
            <details className={style.main_nav_Resources}  open>
                <summary className={style.main_nav_Resources_summary}>Resources</summary>
                <div className={style.main_nav_Resources_div_01}>
                <p className={style.main_nav_Resources_item}>About Reddit</p>
                <p className={style.main_nav_Resources_item} >Advertise</p>
                <p className={style.main_nav_Resources_item} >Help</p>
                <p className={style.main_nav_Resources_item} >Blog</p>
                <p className={style.main_nav_Resources_item} >Careers</p>
                <p className={style.main_nav_Resources_item} >Press</p>
                
                </div>
                <hr className={style.main_nav_Resources_hr} />
                <div className={style.main_nav_Resources_div_02} >
                <p className={style.main_nav_Resources_item} >Communitties</p>
                <p className={style.main_nav_Resources_item} >Best of Reddit</p>
                <p className={style.main_nav_Resources_item} >Topics</p>
                
                </div>
                <hr className={style.main_nav_Resources_hr}/>
                <div className={style.main_nav_Resources_div_03}>
                <p className={style.main_nav_Resources_item} >Reddit Rules</p>
                <p className={style.main_nav_Resources_item} >Privacy Policy</p>
                <p className={style.main_nav_Resources_item} >User Agreement</p>
                </div>
            </details>
            <footer>
            <p>AshReddit,Inc.@2025. All rights reserved.</p>
           </footer>
            </div>
            
        </nav>
        </>
    )
}

export default SideNavigation;
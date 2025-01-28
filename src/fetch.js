// import React, { use } from "react";
// import { useState } from "react";
// import PopularReddit from "./popluarreddit";

// function Fetch({query}) {
//     const [Data, setFetchData] = useState([]);
   
//     async function fetchData() {
//         const url = `https://www.reddit.com/r/${query}.json`
//         try {
//             const data = await fetch(url, {
//                 method: "GET",
//                 "Content-Type": "application/json",
//             });
//             const response = await data.json();
         
//             setFetchData(response.data.children);

//         } catch (error) {
//             console.log(error);
//         }

//     }
//     useEffect(() => {
//         fetchData();
//     },[ ]);

// }

// export default Fetch;
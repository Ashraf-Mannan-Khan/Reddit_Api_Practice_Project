import React, { useState, useEffect } from "react";
import { PiArrowFatUpFill } from "react-icons/pi";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
function DislikeButton() {
    const [dislike, setDislike] = useState(false);
    
    function handleClick() {
        setDislike(!dislike);
    }
    if (dislike) {
        return (
            <>

                <AiFillDislike
                    color="red"
                    size="20"
                    onClick={handleClick} />
            </>
        )
    } else {
        return (
            <>
                <AiTwotoneDislike onClick={handleClick} color="black" size="20" />

            </>

        )

    }



}

export default DislikeButton;
import React from "react";

export default function Movieinfo({...rest}) {
    const {title, genres, medium_cover_image, summary} = rest

    return (
        <div style={{width: '230px', height: '500px', background: "gray", margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            <img src={medium_cover_image} alt={title}></img>
            <h3>{title}</h3>
            <h4>{genres.join(" ")}</h4>
            {/* <p>{summary}</p> */}
        </div>
    )
}
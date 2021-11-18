import React from "react";

export default function Movieinfo({...rest}) {
    const {id, title, genres, cover, summary} = rest

    return (
        <div style={{width: '230px', height: '500px', background: "white", margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            <img src={cover} alt={title}></img>
            <h3>{title}</h3>
            <h4>{genres.join(" ")}</h4>
            {/* <p>{summary}</p> */}
        </div>
    )
}
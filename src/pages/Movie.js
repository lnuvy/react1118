import React, { Children } from "react";
import { useParams, NavLink, useSearchParams, useLocation } from 'react-router-dom';
import movieData from "../movieData";

export default function Movie() {
    const params = useParams();
    let [searchParams, setSearchParams] = useSearchParams()
    const applyActiveColor = ({ isActive }) => (isActive ? {color: 'orangered'} : {})

    const changeQueryString = (e) => {
        const filter = e.target.value
        // console.log(filter)

        if(filter) {
            setSearchParams({ filter })
        } else {
            setSearchParams({})
        }
    }

    const QueryNavLink = ({ to, children, ...props }) => {
        const location = useLocation()
        // console.log(location)
        return <NavLink to={to + location.search} {...props}>{children}</NavLink>
    }

    const postsFiltered = movieData
        .filter( movie => {
            const filter = searchParams.get('filter')
            if(!filter) return true;
            const title = movie.title.toLowerCase()
            return title.includes(filter.toLowerCase())
        })
        

        const movie = postsFiltered[params.id]

    return (
        <>

            <br/><input className="filter-movie" value={searchParams.get('filter') || ""} onChange={changeQueryString} placeholder="Search movie..."/>

            {movie ?
                <div className="movie-container">
                <h1>{movie.title}</h1>
                <p>{movie.content}</p>
                <span>{movie.created}</span>
                </div> :
            <h1>정보없음</h1>}

            {postsFiltered
                .map((movie, id) => {
                    return (
                        <QueryNavLink key={id} to={`/movieData/${id}`} className="movie-item" style={applyActiveColor}>{movie.title}</QueryNavLink>
                    )
                })}
        </>
    )
}
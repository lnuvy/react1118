import React, { Children } from "react";
import { useParams, NavLink, useSearchParams, useLocation } from 'react-router-dom';
import posts from '../postData'
import '../Post.css'

export default function Post() {
    const params = useParams();
    // const post = posts[params.postId]
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

    const postsFiltered = posts
        .filter( post => {
            const filter = searchParams.get('filter')
            if(!filter) return true;
            const title = post.title.toLowerCase()
            return title.includes(filter.toLowerCase())
        })

        const post = postsFiltered[params.postId]

    return (
        <>

            <br/><input className="filter-post" value={searchParams.get('filter') || ""} onChange={changeQueryString} placeholder="Search post..."/>

            {post ?
                <div className="post-container">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <span>{post.created}</span>
                </div> :
            <h1>POST PAGE</h1>}

            {postsFiltered
                .map((post, id) => {
                    return (
                        <QueryNavLink key={id} to={`/posts/${id}`} className="post-item" style={applyActiveColor}>{post.title}</QueryNavLink>
                    )
                })}
        </>
    )
}
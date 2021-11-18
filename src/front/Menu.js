import { Link } from 'react-router-dom'
import './Menu.css'
// import posts from './postData'

export default function Menu({menus}) {
    return (
        <>
            {menus.map ((menu, id) => {
                return (
                    <Link key={id} to={menu.url} className="menu-item">{menu.name}</Link>
                )
            })}
        </>
    )
}








/*
        <>
            <Link to="/" className="menu-item">HOME</Link><br/>
            <Link to="/about" className="menu-item">ABOUT</Link>

            <Link to="/posts/포스트" className="menu-item">포스트</Link>
            <Link to="/posts/2" className="menu-item">Post 2</Link>
            <Link to="/posts/asdfasfsadfasdf" className="menu-item">Post 3</Link>

            {posts.map((post, id) => {
                return (
                    <Link key={id} to={`/posts/${id}`} className="menu-item">{post.title}</Link>
                )
            })}
        </>
        */
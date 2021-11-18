import axios from "axios"
import { Component } from "react"
import Movieinfo from "../Movieinfo"
import React from "react"
// import axios from "axios"

export default class Home extends Component {
    
    state = {
        movies: [],
    }

    componentDidMount() {
        const url = 'https://yts.mx/api/v2/list_movies.json?limit=12'
        axios(url)
            .then( res => {
                console.log(res.data.data.movies)
                return res.data.data.movies;
            })
            .then((res) => {
                const movies = res
                console.log(movies)
                this.setState({movies})
            })
    }

    render() {
        const { movies } = this.state

        const centergara = {
            display: "inline-block",
            textAlign: "center",
        }

        // const textColor = {
        //     color: "black | initial"
        // }

        return (
            <>
                {movies.map((movie) => {
                    return <div style={centergara} key={movie.id}>
                        <Movieinfo
                            title={movie.title}
                            genres={movie.genres}
                            medium_cover_image={movie.medium_cover_image}
                            summary={movie.summary}
                        ></Movieinfo>
                    </div>
                })}
            </>
        )
    }
}

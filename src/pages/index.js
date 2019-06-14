import React from "react"
import {
    Link
} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Movie from "../components/movie"


const movie = {
    title: "Dragonball Super",
    genre: "Anime",
    trailer: "gxP2fOuTJQ8",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd0xtx9-d80b341c-c886-4bbb-85e4-eddb4c5664da.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQweHR4OS1kODBiMzQxYy1jODg2LTRiYmItODVlNC1lZGRiNGM1NjY0ZGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3HdgdcL2B756EqRshVS5pQkvgcsMAJLyBanDr0Emj8Q",

}

const IndexPage = () => (<
Layout >
    <SEO title="Home" />

    <Movie data={movie} />

    < /Layout >
                                                                                                               )
                                                                                                               
export default IndexPage
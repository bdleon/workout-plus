import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


const SearchResults = ({ searchUserInput }) => {
    const [SearchInputResults, updateSearchResults] = useState([])
    const [posts, updatePosts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/posts?_expand=workoutCategories&_expand=user")
                .then(res => res.json())
                .then((PostsArray) => {
                    updatePosts(PostsArray)


                })

        }, []
    )

    useEffect(
        () => {
            if (searchUserInput !== "") {
                const foundPosts = posts.filter(post => post.title.toLowerCase().startsWith(searchUserInput.toLowerCase())||post.user?.name.toLowerCase().startsWith(searchUserInput.toLowerCase()))
                if (foundPosts !== undefined) {
                    updateSearchResults(foundPosts)
                }
            } else {
                updateSearchResults({})
            }
        },
        [searchUserInput]
    )

    return (
        <>
            <h2>Search Results: {SearchInputResults ==='' ? 0:SearchInputResults.length}</h2>
           
            {
                SearchInputResults.length > 0 ?
                    SearchInputResults.map( result => {
                        return <div key={`post--${result.id}`} className="post-card--card">
                           
                        <h2><Link to={`/posts/${result.id}`}>{result.title}</Link></h2>
                        <img alt="Category icon" src={result.workoutCategories.image} className="category_image" />
                        <div>
                            <p>Difficulty:{result.difficulty}</p>
                            <p>Category:{result.workoutCategories.type}</p>
                            <p>User:{result.user.name}</p>
                        </div>
                    </div>

                    })
                    : ""
            }
        </>
    )
}

export default SearchResults
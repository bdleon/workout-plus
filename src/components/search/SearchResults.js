import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './SearchResults.css';



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
            <h2 className="search-results-title">Search Results: {SearchInputResults ==='' ? 0:SearchInputResults.length}</h2>
            <div className="post-card">
            {
                SearchInputResults.length > 0 ?
                    SearchInputResults.map( result => {
                        return <div key={`result--${result.id}`} className="result-card--card">
                        
                        <Card className="card" style={{ width: '19rem' }}>
                            <Card.Img variant="top" src={result.workoutCategories.image} />
                            <Card.Body>
                                <Card.Title>{result.title}</Card.Title>
                                <Card.Text>
                                Difficulty:{result.difficulty}
                                </Card.Text>
                                <Card.Text>
                                Category:{result.workoutCategories.type}
                                </Card.Text>
                                <Card.Text>
                                User:{result.user.name}
                                </Card.Text>
                                <Link to={`/posts/${result.id}`}>  <Button variant="primary">More info</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                    })
                    : ""
            }</div>
        </>
    )
}

export default SearchResults
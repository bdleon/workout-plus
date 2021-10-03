
import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom";
import './postList.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'





export const PostList = () => {

    const [posts, changePosts] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/posts?_expand=workoutCategories&_expand=user")
                .then(res => res.json())
                .then((PostsArray) => {
                    changePosts(PostsArray)


                })

        }, []
    )

    return (
        <>
            <Button className="create-post--button" onClick={() => history.push("/posts/create")}>Create+</Button>
            <div className="post-card">

                {
                    posts.map(
                        (post) => {
                            return <div key={`post--${post.id}`} className="post-card--card">
                                {/* <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                                <img alt="Category icon" src={post.workoutCategories.image} className="category_image" />
                                <div>
                                    <p>Difficulty:{post.difficulty}</p>
                                    <p>Category:{post.workoutCategories.type}</p>
                                    <p>User:{post.user.name}</p>
                                </div> */}
                                <Card className="card" style={{ width: '19rem' }}>
                                    <Card.Img variant="top" src={post.workoutCategories.image} />
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>
                                        Difficulty:{post.difficulty}
                                        </Card.Text>
                                        <Card.Text>
                                        Category:{post.workoutCategories.type}
                                        </Card.Text>
                                        <Card.Text>
                                        User:{post.user.name}
                                        </Card.Text>
                                        <Link to={`/posts/${post.id}`}>  <Button variant="primary">More info</Button></Link>
                                    </Card.Body>
                                </Card>
                            </div>


                        }).reverse()
                }</div >
        </>
    )
}
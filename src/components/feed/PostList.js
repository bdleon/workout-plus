
import React, { useState, useEffect } from "react"
import { useHistory,Link } from "react-router-dom";
import './postList.css';




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
            <button onClick={() => history.push("/posts/create")}>Create+</button>
            <div className="post-card">

                {
                    posts.map(
                        (post) => {
                            return <div key={`post--${post.id}`} className="post-card--card">
                                <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                                <img alt="Category icon" src={post.workoutCategories.image} className="category_image" />
                                <div>
                                    <p>Difficulty:{post.difficulty}</p>
                                    <p>Category:{post.workoutCategories.type}</p>
                                    <p>User:{post.user.name}</p>
                                </div>
                            </div>






                        })
                }</div >
        </>
    )
}
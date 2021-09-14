
import React, { useState, useEffect } from "react"
import './postList.css';




export const PostList = () => {

    const [posts, changePosts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/posts?_expand=workoutCategories&_expand=user")
                .then(res => res.json())
                .then((PostsArray) => {
                    changePosts(PostsArray)


                })

        }, []
    )
    console.log(posts)
    return (
        <>
            <div>
                <button>Create+</button>
                {
                    posts.map(
                        (post) => {
                            return <div key={`post--${post.id}`}>
                                <h2>{post.title}</h2>
                                <img alt="Category icon" src={post.workoutCategories.image} className="category_image" />
                                <div>
                                    <p>difficulty:{post.difficulty}</p>
                                    <p>Category:{post.workoutCategories.type}</p>
                                    <p>user:{post.user.name}</p>
                                </div>
                            </div>
     
                

                
                
                
            })
        }</div >
        </>
    )
}
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import "./Post.css"
import Button from 'react-bootstrap/Button'

export const Post = () => {
    const [post, update] = useState({})

    const { postId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}?_expand=workoutCategories&_expand=user`)
                .then(res => res.json())
                .then((data) => {
                    update(data)


                })
        },
        [postId]
    )



    const deletePost = (id) => {
        fetch(`http://localhost:8088/posts/${postId}`, {
            method: "DELETE"
        })
        history.push("/posts")
    }
    return (
        <>
            <h2>Post Details</h2>
            <section className="post">
                <h3 className="post__title">{post.title}</h3>
                <div className="post__sub-description">
                <div className="post__difficulty">Difficulty: {post.difficulty}</div>
                <div className="post__workoutCategories">Category: {post.workoutCategories?.type}</div>

                <div className="post__user">User: {post.user?.name}</div>
                </div>
                <div className="transformation__picture">
                    <div className="transformation__picture-group">
                <h4 className="post_beforePic">Before Picture</h4>
                <img src={post.beforePicture} alt='before picture'></img>
                </div>
                <div className="transformation__picture-group">
                <h4 className="post_beforePic">After Picture</h4>
                <img src={post.afterPicture} alt='after picture'></img>
                </div>
                </div>
                <h4>Workout Description</h4>
                
                <div className="post__text" >{post.workoutText}</div>
                <Button onClick={() => history.push("/posts")}>back</Button>
                {post.userId === parseInt(localStorage.getItem("workout_token")) ?
                    <>
                        <Button onClick={() => {
                            deletePost(post.id)
                        }}>Delete</Button>
                    </>
                    : ""

                }
                {post.userId === parseInt(localStorage.getItem("workout_token")) ?
                    <>
                        <Button onClick={() => history.push(`/posts/edit/${post.id}`)}>Edit</Button>
                    </>
                    : ""

                }


            </section>
        </>
    )
}
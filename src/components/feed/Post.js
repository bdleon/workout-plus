import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

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
                <div className="post__difficulty">Difficulty:{post.difficulty}</div>
                <div className="post__workoutCategories">Category:{post.workoutCategories?.type}</div>

                <div className="post__user">User:{post.user?.name}</div>
                <h4 className="post_beforePic">Before Picture</h4>
                <img src={post.beforePicture } alt='before picture'></img>
                <h4 className="post_beforePic">After Picture</h4>
                <img src={post.afterPicture} alt='after picture'></img>
                <h4>Workout Description</h4>
                <div className="post__text">{post.workoutText}</div>
                <button onClick={() => history.push("/posts")}>back</button>
                {post.userId === parseInt(localStorage.getItem("workout_token")) ?
                    <>
                        <button onClick={() => {
                            deletePost(post.id)
                        }}>Delete</button>
                    </>
                    : ""

                }
                {post.userId === parseInt(localStorage.getItem("workout_token")) ?
                    <>
                        <button onClick={() => history.push(`/posts/edit/${post.id}`)}>Edit</button>
                    </>
                    : ""

                }


            </section>
        </>
    )
}
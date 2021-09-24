import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import './PostForm.css'

export const PostEdit = () => {
    const [post, updatePost] = useState({
        workoutText: ''
    })

    const { postId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}?_expand=workoutCategories&_expand=user`)
                .then(res => res.json())
                .then((data) => {
                    updatePost(data)


                })
        },
        [postId]
    )
    const saveEditPost = (event) => {
        event.preventDefault()
        const newEditPost = {

            userId: parseInt(localStorage.getItem("workout_token")),
            workoutCategoriesId: post.workoutCategoriesId,
            difficulty: post.difficulty,
            beforePicture: post.beforePicture,
            afterPicture: post.afterPicture,
            workoutText: post.workoutText,
            title: post.title
        }

        const fetchOption = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEditPost)
        }

        return fetch(`http://localhost:8088/posts/${postId}`, fetchOption)
            .then(() => {
                history.push(`/posts/${post.id}`)
            })

    }
    return (
        <>
            <section>
                <h2>Post Edit</h2>
                <p>User: {post.user?.name}</p>
                <label>Edit Workout Description</label>
                <textarea value={post.workoutText} name="workout-text" rows="20" cols="70"
                    onChange={
                        (event) => {
                            const copy = { ...post }
                            copy.workoutText = event.target.value
                            updatePost(copy)
                        }
                    }></textarea>
                    <button onClick={()=>history.push(`/posts/${post.id}`)}>back</button>
                    <button onClick={saveEditPost}>Summit Post</button>
                    
            </section>
        </>
    )

}
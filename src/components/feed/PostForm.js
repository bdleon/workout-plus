import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const PostForm = () => {

    const [workoutCategories, setWorkoutCategories] = useState([])
    const [post, postUpdate] = useState({

        title: "",
        workoutCategoryId: 0,
        difficulty: "",
        beforePicture: "",
        afterPicture: "",
        workoutText: ""

    })
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/workoutCategories")
                .then(res => res.json())
                .then((data) => {
                    setWorkoutCategories(data)
                })
        },
        []
    )

    const savePost = (event) => {
        event.preventDefault()
        const newPost = {
            userId: parseInt(localStorage.getItem("workout_token")),
            workoutCategoriesId: post.workoutCategoryId,
            difficulty: post.difficulty,
            beforePicture:post.beforePicture,
            afterPicture: post.afterPicture,
            workoutText: post.workoutText,
            title: post.title


        }

        const fetchOption = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }

        return fetch("http://localhost:8088/posts", fetchOption)
            .then(() => {
                history.push("/")
            })

    }




    return (
        <>
            <form className="postForm">
                <h2 className='postForm_title'>Create Post</h2>
                <fieldset>

                    <div className="form-group">
                        <label htmlFor="description">Title:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="ex. spiderman pushup"
                            onChange={
                                (event) => {
                                    const copy = { ...post }
                                    copy.title = event.target.value
                                    postUpdate(copy)
                                }
                            } />
                    </div>
                    <div className="form-group">

                        <label htmlFor="description">Select Category:</label>
                        <select
                            required autoFocus
                            type="text"
                            className="form-control"
                            onChange={
                                (event)=>{
                                    const copy = {...post}
                                   
                                    copy.workoutCategoryId =parseInt( event.target.value)
                                    
                                    postUpdate(copy)
                                }
                            }
                        >
                            <option> -------- </option>
                            {
                                workoutCategories.map(
                                    (workout) => {
                                        return <option key={workout.id} value = {workout.id}>{workout.type}</option>
                                    }
                                )
                            }


                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Difficulty:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="ex. easy,medium,hard" 
                            onChange={
                                (event) => {
                                    const copy = { ...post }
                                    copy.difficulty = event.target.value
                                    postUpdate(copy)
                                }
                            }/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Before Picture:</label>
                        <input
                            required autoFocus
                            type="file"
                            className="form-control"
                            placeholder="before picture"
                            onChange={
                                (event) => {
                                    const copy = { ...post }
                                    copy.beforePicture = event.target.value
                                    postUpdate(copy)
                                }
                            } />

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">After Picture:</label>
                        <input
                            required autoFocus
                            type="file"
                            className="form-control"
                            placeholder="after picture"
                            onChange={
                                (event) => {
                                    const copy = { ...post }
                                    copy.afterPicture = event.target.value
                                    postUpdate(copy)
                                }
                            } />

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Workout description:</label>
                        <textarea placeholder="please be detailed as possible. include #sets,#reps,and length" name="workout-text" rows="20" cols="70" 
                        onChange={
                            (event) => {
                                const copy = { ...post }
                                copy.workoutText = event.target.value
                                postUpdate(copy)
                            }
                        }></textarea>
                    </div>


                </fieldset>
                <button className="btn btn-primary" onClick={savePost}>
                Submit Ticket
            </button>
            </form>
        </>
    )
}
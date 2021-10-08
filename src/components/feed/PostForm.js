import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import './PostForm.css'
import Form from 'react-bootstrap/Form'

export const PostForm = () => {

    const [workoutCategories, setWorkoutCategories] = useState([])
    const [image, setImage] = useState({
        beforePicture: '',
        afterPicture: ''
    })
    const [loading, setLoading] = useState(false)
    const uploadBeforeImage = async upload => {
        const files = upload.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'workout_plus')
        setLoading(true)
        const res = await fetch(
            ' https://api.cloudinary.com/v1_1/dixa4dkul/image/upload',
            {
                method: 'POST',
                body: data
            }

        )
        const file = await res.json()
        const copy = { ...image }
        copy.beforePicture = file.secure_url
        setImage(copy)
        setLoading(false)
    }
    const uploadAfterImage = async upload => {
        const files = upload.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'workout_plus')
        setLoading(true)
        const res = await fetch(
            ' https://api.cloudinary.com/v1_1/dixa4dkul/image/upload',
            {
                method: 'POST',
                body: data
            }

        )
        const file = await res.json()
        const copy = { ...image }
        copy.afterPicture = file.secure_url
        setImage(copy)
        setLoading(false)
    }
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
            beforePicture: image.beforePicture,
            afterPicture: image.afterPicture,
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
                history.push("/posts")
            })

    }




    return (
        <><div>
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
                                    let copy = { ...post }
                                    copy.title = event.target.value
                                    
                                    postUpdate(copy)
                                }
                            }/>
                    </div>
                    <div className="form-group">

                        <label htmlFor="description">Select Category:</label>
                        <select
                            required autoFocus
                            type="text"
                            className="form-control"
                            onChange={
                                (event) => {
                                    const copy = { ...post }

                                    copy.workoutCategoryId = parseInt(event.target.value)

                                    postUpdate(copy)
                                }
                            }
                        >
                            <option> Select a category </option>
                            {
                                workoutCategories.map(
                                    (workout) => {
                                        return <option key={workout.id} value={workout.id}>{workout.type}</option>
                                    }
                                )
                            }


                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Difficulty:</label>
                        <select
                            
                            type="text"
                            className="form-control"
                            placeholder="ex. easy,medium,hard"
                            onChange={
                                (event) => {
                                    const copy = { ...post }
                                    copy.difficulty = event.target.value
                                    postUpdate(copy)
                                }
                            } required autoFocus>
                                <option>Select Difficulty</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                                <option>Pro</option>
                                <option>Warning: Do on your on risk</option>

                            </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Before Picture:</label>
                        <input
                            required autoFocus
                            type="file"
                            className="form-control"
                            placeholder="before picture"
                            onChange={uploadBeforeImage} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">After Picture:</label>
                        <input
                            required autoFocus
                            type="file"
                            className="form-control"
                            placeholder="after picture"
                            onChange={uploadAfterImage} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Workout description:</label>
                        <textarea placeholder="please be detailed as possible. include #sets,#reps,and length" name="workout-text" rows="7"
                            onChange={
                                (event) => {
                                    const copy = { ...post }
                                    copy.workoutText = event.target.value
                                    postUpdate(copy)
                                }
                            }required></textarea>
                    </div>


                </fieldset>
                <button className="btn btn-primary" onClick={savePost} type="submit" >
                    Submit Post
                </button>
            </form>
        </div>
      
        </>
    )
}
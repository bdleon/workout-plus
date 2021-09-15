import { useEffect, useState } from "react"

export const PostForm = () => {

    const [workoutCategories, setWorkoutCategories] = useState([])


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




    return (
        <>
            <form className="postForm">
                <h2 className='postForm_title'>Create Post</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Name:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Title:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="ex. spiderman pushup" />
                    </div>
                    <div className="form-group">

                        <label htmlFor="description">Select Category:</label>
                        <select
                            required autoFocus
                            type="text"
                            className="form-control"
                        >
                            <option> -------- </option>
                            {
                                workoutCategories.map(
                                    (workout) => {
                                        return <option key={`location--${workout.id}`}>{workout.type}</option>
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
                            placeholder="ex. easy,medium,hard" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Before Picture:</label>
                        <input
                            required autoFocus
                            type="file"
                            className="form-control"
                            placeholder="before picture" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">After Picture:</label>
                        <input
                            required autoFocus
                            type="file"
                            className="form-control"
                            placeholder="after picture" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Workout description:</label>
                        <textarea  placeholder="please be detailed as possible. include #sets,#reps,and length" name="workout-text" rows="20" cols="70" ></textarea>
                    </div>


                </fieldset>

            </form>
        </>
    )
}
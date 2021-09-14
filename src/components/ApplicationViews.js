import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./feed/PostList"



export const ApplicationViews = () => {
    return (
        <>
        <Route path="/posts">
            <PostList />
        </Route>
        </>
    )
}
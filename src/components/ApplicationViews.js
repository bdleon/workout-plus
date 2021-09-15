import React from "react"
import { Route } from "react-router-dom"




import { PostForm } from "./feed/PostForm"
import { PostList } from "./feed/PostList"



export const ApplicationViews = () => {
    return (
        <>
        <Route exact path="/">
            <PostList />
        </Route>
        <Route path="/posts/create">
            <PostForm />
        </Route>
        
        
        </>
    )
}
import React from "react"
import { Route } from "react-router-dom"
import { Post } from "./feed/Post"
import { PostEdit } from "./feed/PostEdit"
import { PostForm } from "./feed/PostForm"
import { PostList } from "./feed/PostList"
import Search from "./search/Search"



export const ApplicationViews = () => {
    return (
        <>
        <Route exact path="/posts">
            <PostList />
        </Route>
        <Route path="/posts/create">
            <PostForm />
        </Route>
        <Route exact path="/posts/:postId(\d+)">
            <Post />
        </Route>
        <Route exact path="/search">
            <Search/>
        </Route>
        <Route exact path="/posts/edit/:postId(\d+)">
            <PostEdit/>
        </Route>
        
        </>
    )
}
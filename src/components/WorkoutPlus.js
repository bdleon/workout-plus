
import React from "react"
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';


export const WorkoutPlus = () =>(
    <>
      <Route
        render={() => {
          if (localStorage.getItem("workout_token")) {
            return (
              <>
                <NavBar />
                <h1>Workout Plus</h1>
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
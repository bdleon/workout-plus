import { useState,useEffect } from "react";


const SearchResults = ({userInput}) =>{
    const [userInput, setUserInput] = useState([]);

    return(
        <>
        <form>
            <label>{userInput}</label>
           
        </form>
        </>
    )
}

export default SearchResults
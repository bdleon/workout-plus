import { useEffect, useState } from "react";
import SearchInput from "./SearchInput"
import SearchResults from "./SearchResults"
const Search = () => {
    const [userInput, setUserInput] = useState("");
    const [user, setUser] = useState([])
    // userinput is controlled by the Search component
    const handleChange = e => {
        setUserInput(e.target.value);
    };

    const addItem = e => {
        if (userInput !== "") {

            setUserInput("");
        }
    };
    useEffect(
        () => {
            fetch("http://localhost:8088/posts?_expand=user")
                .then(res => res.json())
                .then((usersArray) => {
                    return setUser(usersArray)


                })

        }, []
    )



    return (
        <>
            <h2>Search Posts</h2>
            <SearchInput updateSearchState={setUserInput} />
            <SearchResults searchUserInput={userInput} />

        </>
    );
}

export default Search;
import { useState } from "react";
import SearchInput from "./SearchInput"
import SearchResults from "./SearchResults"
const Search = () => {
    const [userInput, setUserInput] = useState("");
   
    



    return (
        <>
            <h2>Search Posts</h2>
            <SearchInput updateSearchState={setUserInput} />
            <SearchResults searchUserInput={userInput} />

        </>
    );
}

export default Search;
import { useState } from "react";
import SearchInput from "./SearchInput"
import SearchResults from "./SearchResults"
import './SearchResults.css';
const Search = () => {
    const [userInput, setUserInput] = useState("");
   
    



    return (
        <>
            <h2 className="search-posts-title">Search Posts</h2>
            <SearchInput updateSearchState={setUserInput} />
            <SearchResults searchUserInput={userInput} />

        </>
    );
}

export default Search;
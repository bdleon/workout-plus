import { useEffect, useState } from "react";
import SearchInput from "./SearchInput"
import SearchResults from "./SearchResults"
const Search = () => {
    const [userInput, setUserInput] = useState("");
    const [user,setUser] = useState([])
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
      <SearchInput onChange={()=>handleChange()}/>
      <SearchResults onChange={()=>addItem()}/>
    
       </>
    );
  }
  
  export default Search;
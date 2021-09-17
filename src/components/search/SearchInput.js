import { useState,useEffect } from "react";
const SearchInput = () =>{
// userinput is controlled by the Search component
const [userInput, setUserInput] = useState([]);
const handleChange = e => {
    setUserInput(e.target.value);
  };

  const addItem = e => {
    if (userInput !== "") {
    
      setUserInput("");
    }
  };

    return(
        <>

<form>
          <input
            placeholder="Something that needs to be done..."
            value={userInput}
            onChange={handleChange}
          />
          <button type="button" onClick={addItem}>
            {'Add Item'}
          </button>
        </form>
     
        </>
    )
}
export default SearchInput
import './SearchResults.css';
const SearchInput = ({ updateSearchState }) => {
   
    

    return (
        <>

            <form className="search-form">
                <input
                    placeholder="search here"
                    className="search"
                    required autoFocus
                    onChange={
                        (event)=>{
                            const search = event.target.value
                            updateSearchState(search)
                        }
                    }
                />

            </form>

        </>
    )
}
export default SearchInput
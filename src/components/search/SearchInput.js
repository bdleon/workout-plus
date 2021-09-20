
const SearchInput = ({ updateSearchState }) => {
   
    

    return (
        <>

            <form>
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
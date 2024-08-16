

const SearchResult = ({title, handleSelection, movie}) => {
    return (
        <div onClick={() => handleSelection(movie)} className="searchResult">
            {title}
        </div>
    )
}

export default SearchResult;
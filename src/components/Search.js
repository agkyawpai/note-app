import React from "react";
import { MdSearch } from 'react-icons/md';
function Search(props) {
    const { handleSearchNote } = props;
    const handleSearch = (e) => {
        handleSearchNote(e.target.value);
    }
    return (
        <>
        <div className="search">
            <MdSearch className="search-icon" size="1.3em" />
            <input onChange={handleSearch} type="text" placeholder="Search note..." />
        </div>
        </>
    )
}
export default Search;
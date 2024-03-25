import React, { useState } from "react";

function Search({ setCity }) {
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    }
    const CityChange = () => {
        setCity(searchValue);
    }
    return (
        <>
            <div className="hero">
                <div className="container">
                    <form action="#" className="find-location">
                        <input type="text" placeholder="Find your location..." onChange={handleChange} defaultValue="Delhi" />
                        <input type="button" value="Find" onClick={CityChange} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search;
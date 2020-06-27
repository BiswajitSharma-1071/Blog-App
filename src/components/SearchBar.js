import React, { useState } from 'react';

function SearchBar(props) {

    const [searchData, setsearchData] = useState("");
    const [newPostList, setnewPostList] = useState([]);
    const [flag, setFlag] = useState(true)
    const [errMsg, setErrMsg] = useState("")

    function handleChange(event) {
        const newValue = event.target.value;
        setsearchData(newValue);
    }

    function handleSubmit(event) {
        event.preventDefault();
        var newArray = [];
        if (searchData.trim() !== "") {
            props.data.forEach(element => {
                var title = element.title;
                var content = element.content;

                if (title.search(searchData) !== -1 || content.search(searchData) !== -1) {
                    newArray.push(element)
                }
            });
            setnewPostList(newArray)
        }
        else {
            setErrMsg("Nothing to search for")
        }
    }

    return (
        <div>
            <form className="formSearch"
                onSubmit={handleSubmit}
                onMouseOut={() => { setErrMsg("") }}>
                <button className="searchIconBut" type="submit" onClick={() => { setFlag(true) }}><span >Search</span></button><span>  </span>
                <input className="searchInp" type="text" placeholder="Search.."
                    name="search" size="50" onChange={handleChange} value={searchData} /><span>  </span>
                <button className="clearIconBut"
                    onClick={() => {
                        setFlag(false)
                        setsearchData("");
                        setnewPostList([]);
                        setErrMsg("")
                    }}><span >Clear</span></button>
                {errMsg && <div style={{ color: 'red' }}>{errMsg}</div>}
            </form>
            {(newPostList.length !== 0) && flag && newPostList.map((value, index) => {
                return (
                    <div className="note">
                        <h1>{value.title}</h1>
                        <p>{value.content}</p>
                    </div>
                );
            })
            }
        </div >
    );
}

export default SearchBar;
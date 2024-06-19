import {useState} from "react"

const App = ()=>{
    const [searchText, setSearchText] = useState("ABC");
    return(        
        <div>
            {searchText}
        <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
    </div>
)
}

export default App
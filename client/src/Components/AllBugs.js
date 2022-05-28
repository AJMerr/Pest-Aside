import React, { useEffect, useState } from "react" 
import axios from "axios"

function AllBugs() {
    
    const [bugList, setBugList] = useState([]) 

    useEffect(() => {
        const fetchAllBugs = async () => {
            try {
                const res = await axios.get("/api")
                setBugList(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllBugs()
    }, [])

    return(
        <>
        <div> 
            {bugList.map((val, key) => {
                return <div>
                    <h2 className="text-4xl text-center">
                        {val.bugTitle}
                    </h2>
                    <p className="text-center">
                        {val.bugDescription}
                    </p>
                </div>
            })}
        </div>
        </>
    )
}

export default AllBugs
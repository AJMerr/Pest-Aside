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
                return (
                    <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center">
                            <card className="flex flex-col rounded-lg shadow-md w-1/2 p-10 bg-white mt-4">
                                <p className="text-center text-gray-800 text-4xl">
                                    {val.bugTitle}
                                </p>
                                <p className="text-center text-gray-600 mt-2">
                                    {val.bugDescription}
                                </p>
                            </card>
                        </div>
                    </div>
            )})}
        </div>
        </>
    )
}

export default AllBugs
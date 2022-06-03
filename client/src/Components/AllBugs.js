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
            <container className="mx-auto">
                <div className="grid grid-cols-3 mt-10">
                    <div>
                        <p className="text-center">
                            To Do
                        </p>
                        {bugList.map((val, key) => {
                            return (
                                <div className="flex flex-col items-center">
                                    <div className="rounded-lg shadow-md max-w-md p-4 bg-white mt-4">
                                        <p className="text-center text-gray-800 text-2xl">
                                            {val.bugTitle}
                                        </p>
                                        <p className="text-center text-gray-600 mt-2">
                                            {val.bugDescription}
                                        </p>
                                    </div>
                                </div>
                        )})}
                    </div>
                    <div>
                        <p>
                            In Progress
                        </p>
                    </div>
                    <div>
                        <p>
                            Finished
                        </p>
                    </div>
                </div>
            </container>
        </>
    )
}

export default AllBugs
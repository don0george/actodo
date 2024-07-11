import AddList from "./AddList"
import ShowList from "./ShowList"
import { useState } from 'react';

function ListContainer() {

    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "wake upearly"
        },
        {
            id: 2,
            activity: "eat breakfast"
        }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddList activityArr={activityArr} setActivityArr={setActivityArr}/>
                <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow" >
                    <ShowList activityArr={activityArr} setActivityArr={setActivityArr}/>
                </div>
            </div>
        </div>
    )
}

export default ListContainer
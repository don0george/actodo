import { useState } from 'react';

function AddList(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity, setNewActivity] = useState("")

    function printActivity(event) {
        setNewActivity(event.target.value)
    }

    function addActivity() {
        setActivityArr([...activityArr, {id: activityArr.length + 1, activity: newActivity}])
        setNewActivity("")
    }


    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div className="flex">
            <input type="text" value={newActivity} onChange={printActivity} className="p-1 border rounded-none border-black bg-transparent" placeholder="Next Activity?" />
            <button onClick={addActivity} className="bg-black text-white p-1 border-black" >Add</button>
            </div>
        </div>
    )
}

export default AddList
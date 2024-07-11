import ListItem from "./ListItem"

function ShowList(props) {
    
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return (
        <div>
            <div>
                <h1 className="text-2xl font-medium">Today's Activity</h1>

                {activityArr.length === 0 ? <p>You aren't added activity yet</p>:""}

                {activityArr.map(function (item, index) {
                    return <ListItem id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                })
                }
            </div>
        </div>
    )

}

export default ShowList
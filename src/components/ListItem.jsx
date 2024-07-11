function ListItem(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    function deleteItem(deleteid) {
        var tempArr = activityArr.filter(function(item) {
            if (item.id === deleteid){
                return false
            }
            else{
                return true
            }
        })
        setActivityArr(tempArr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index+1}.{props.item.activity}</p>
            <p className="text-red-500 cursor-pointer" onClick={() => deleteItem(props.id)}>delete</p>
        </div>
    )
}

export default ListItem
function Cards(props) {
    return (
        <div style={{backgroundColor: props.background}} className="px-10 py-5 border rounded-md text-center flex-grow">
            <h1 className="text-2xl font-medium">{props.tittle}</h1>
            <p>{props.Subtittle}</p>
        </div>
    )
}

export default Cards
import { useLocation } from "react-router-dom"
function Landing() {
    const location = useLocation()
    return (<h1>Hello {location.state.user}</h1>)
}

export default Landing
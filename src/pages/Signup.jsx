import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate = useNavigate()
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")

    const users = props.users
    const setUsers = props.setUsers

    function handleuInput(e) {
        setEusername(e.target.value)
    }

    function handlepInput(e) {
        setEpassword(e.target.value)
    }

    function addUser() {
            setUsers([...users, {username: eusername, password: epassword}])
            navigate("/")
    }
    

    return ( 
        <div className="bg-black p-10 ">
        <div className="bg-[#EFEFEF] p-10 background rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Sign Up here :)</p>
            <div className="flex flex-col gap-2 my-2">

                <input type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md" 
                placeholder="Your Name" 
                onChange={handleuInput}/>

                <input type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md" 
                placeholder="Password" 
                onChange={handlepInput}/>

                <input type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md" 
                placeholder="Confirm Password" />

                <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Signup</button>

                <p>Don't have an account? <Link to="/" className="underline">Login</Link></p>
            </div>
        </div>
    </div>
    )
}

export default Signup
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate = useNavigate()
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")
    const [ruser, setRuser] = useState(true)

    const users = props.users

    function handleuInput(e) {
        setEusername(e.target.value)
    }

    function handlepInput(e) {
        setEpassword(e.target.value)
    }

    function check() {

        var userfound = false

        users.forEach(function(item) {
            if(item.username === eusername && item.password === epassword) {
                alert("Login Success")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
            
        })

        if(!userfound) {
            alert("Login Failed")
            setRuser(false)
        }
    }

    return ( 
        <div className="bg-black p-10 ">
            <div className="bg-[#EFEFEF] p-10 background rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you to mange your activities after you login :)</p> : <p className="text-red-500">Please sign up before you login!!</p>}
                
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Your Name" onChange={handleuInput}/>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlepInput}/>

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={check}>Login</button>

                    <p>Already have an account? <Link to="/signup" className="underline">Signup</Link></p>
                </div>
            </div>
        </div>
       
    )
}

export default Login
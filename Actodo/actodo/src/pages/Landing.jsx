import Header from "../components/Header";
import Cards from "../components/Cards";
import ListContainer from "../components/ListContainer";
import { useLocation } from "react-router-dom"

function Landing() {
    const location = useLocation()
    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header name={location.state.user}/>
                <div className="flex gap-7 my-5 justify-between flex-wrap">
                    <Cards background={"#8272DA"} tittle={"23"} Subtittle={"Chennai"} />
                    <Cards background={"#FD6663"} tittle={"July"} Subtittle={"09:08:50"} />
                    <Cards background={"#FCA210"} tittle={"Built Using"} Subtittle={"React"} />
                </div>
                <div>
                    <ListContainer />
                </div>
            </div>
        </div>
    )
}

export default Landing
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate
} from "react-router-dom";

const Router = () => {
    const navigate = useNavigate()

    const gotokloc = () => {
        navigate("/kloc")
    }

    return (
        <div className="navbar">
            <div className="navbardiv1">
                <button className="navbar1btn categbtn">Categories</button>
                <button className="navbar1btn populbtn">Most Popular</button>
                <button className="navbar1btn commingbtn">Comming soon</button>
                <button className="navbar1btn yearbtn">Year</button>
                <button className="navbar1btn countrybtn">Country</button>
            </div>
            <div className="navbardiv2">
                <button className="navbarbtn filmsbtn">Movies</button>
                <button className="navbarbtn seriesbtn">Series</button>

            </div>
            <div className="navbardiv3">
                <input className="search" placeholder="Search Movies:"></input>
                <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" className="userimage"/>
            </div>
        </div>
    )
}

export default Router;
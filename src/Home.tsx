import { Link } from "react-router-dom"
export const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <p>This is the home page</p>
        <Link to="/about">About</Link>
        </div>
    )
    }
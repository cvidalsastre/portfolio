import { Link } from "react-router-dom"
export const About = () => {
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link to="/">Home</Link>
        </p>
        </div>
    )
    }
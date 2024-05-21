import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('../home')
    }
    return (
        <div>
            <h3>Welcome to About</h3>
            <button onClick={handleClick} >Click to go Home</button>
        </div>
    )

}

export default About;
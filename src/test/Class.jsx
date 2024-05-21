import { useParams } from "react-router-dom";

const Class = () => {
    const params = useParams();

    return <h3>Welcome to {params.name} Class</h3>
}

export default Class;
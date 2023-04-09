import PostCard from "./PostCard.jsx"
import Feed from "./Feed.jsx"
import "./Homepage.css"

const Homepage = ({data}) => {

    console.log("data home", data);
    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    return (
        <div>
            < Feed data = {data} />
        </div>
    )
}

export default Homepage;
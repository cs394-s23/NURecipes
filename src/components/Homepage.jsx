import PostCard from "./PostCard.jsx"
import Feed from "./Feed.jsx"
import "./Homepage.css"

const Homepage = ({data}) => {


    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    console.log("data home", data.Recipes);
    return (
        <div className = "feed">
            < Feed data = {data.Recipes}  />
        </div>
    )
}

export default Homepage;
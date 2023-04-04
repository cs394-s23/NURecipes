import PostCard from "./PostCard.jsx"
import "./Homepage.css"

const Homepage = ({data}) => {
    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    return (
        <div>
            <PostCard  title={"test-title"} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg'} username={'user'}
            numLikes = {5} dateTime ={"1-1-01"} cost = {10} timeToMake = {60} caption={'lorem ipsum dolor sit'}/>
        </div>
        

    )
}

export default Homepage;
import PostCard from "./PostCard.jsx"
import "./Homepage.css"

const Homepage = ({data}) => {
    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    return (
        <div>
            <PostCard  title={"Really good pizza"} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg'} username={'Troy Barnes'}
            numLikes = {5} dateTime ={"1-1-01"} cost = {10} timeToMake = {60} caption={'Wow this pizza is so good. I wish I could eat it every day for the rest of my life. In fact, I wish this was all anyone every ate for the rest of time. No other foods should be allowed, and if you don\'t like it, that\'s on you. If you\'re allergic to something, maybe we can make an exception.'} profilePic={"https://openpsychometrics.org/tests/characters/test-resources/pics/C/4.jpg"} />
        </div>
        

    )
}

export default Homepage;
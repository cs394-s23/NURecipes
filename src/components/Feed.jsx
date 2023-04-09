import PostCard from "./PostCard.jsx"

const Feed = ({data}) => {
    // console.log('feed data', data)
    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    return (
        <div className = "feed-container">
            {data.map((post, index) => <PostCard props={post} key={index} />)}
        </div>
        );
    }
        

export default Feed;
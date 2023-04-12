import PostCard from "./PostCard.jsx"

const Feed = ({data}) => {
    // console.log('feed data', data)

    var feedData = Object.values(data);
    console.log(feedData)
    // data.forEach(element => feedData.push(element));

    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    return (
        <div className = "feed-container">
            {feedData.map((post, index) => <PostCard props={post} key={index} />)}
        </div>
        );
    }
        

export default Feed;
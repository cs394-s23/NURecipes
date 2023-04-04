import PostCard from "./PostCard.jsx"




const Feed = ({data}) => {
    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    return (
        <div>
            {data.map((post, index) => <PostCard props={post} key={index} />)}
        </div>
        );
    }
        

export default Feed;
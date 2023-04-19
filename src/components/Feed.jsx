import PostCard from "./PostCard.jsx"

const Feed = ({data, desiredTags}) => {
    // console.log('feed data', data)

    var feedData = Object.values(data);
    console.log(feedData)
    // data.forEach(element => feedData.push(element));


    // Need tags of the recipe
    // Need to know what the desired tags are (from selection)
    // Check that they match 


    const sortedData = feedData.sort((a,b) => {
        return a.date_posted > b.date_posted ? -1 : 1
    })

    feedData = sortedData
    feedData = feedData.filter(checkTag)

    //if feedData is empty, display something


    function checkTag(recipe){
        // Access the tags of the recipe 
        // Check that it matches input, return true or false
        for (var i = 0; i < desiredTags.length; i++) {
            if (desiredTags[i] && !recipe.tags[i]) {
                return false
            }
        }
        return true
    }

    if (!data) {
        return <h1>Data is loading...</h1>;
    }
    else if(feedData.length == 0) {
        return <h1>No posts match this search criteria</h1>
    }
    return (
            <div className = "feed-container">
            {feedData.map((post, index) => <PostCard props={post} key={index} />)}
            </div>

        );
    }
        

export default Feed;
import "./PostCard.css";
// props: POST CLASS: title, caption, image, recipe, author...
const PostCard = (props) => {
    return (
        <div className="card">
    
            <div className="card-body">
            <h5 className="card-user">{props.username}</h5>
                <div className="card-image">
                    <img src={props.image} className = "foodImg" alt="" />
                </div>
                <img src="https://e7.pngegg.com/pngimages/799/396/png-clipart-heart-gold-heart-icon-love-metal.png" className = "likeImg"/>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.caption}</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
            </div>
        </div>
    )
}

export default PostCard;
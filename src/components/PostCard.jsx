import "./PostCard.css";
// props: POST CLASS: title, caption, image, recipe, author...
const PostCard = (props) => {
    return (
        <div className="card">
    
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="card-image">
                    <img src={props.image} alt="" />
                </div>
                <p className="card-text">{props.caption}</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
            </div>
        </div>
    )
}

export default PostCard;
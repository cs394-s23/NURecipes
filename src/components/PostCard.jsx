import "./PostCard.css";
import React, { useState} from "react"


// props: POST CLASS: title, caption, image, recipe, author...
const PostCard = (props) => {

    const [liked, setLiked] = useState(false);
    const iconClass = liked? "liked" : "unliked"

    return (
        <div className="card">
    
            <div className="card-body">
                <h5 className="card-user">{props.username}</h5>
                <div className="card-image">
                    <img src={props.image} className = "foodImg" alt="" />
                </div>
                <button className={iconClass}><img className='icon-img' src="src/assets/emptyheart.png" 
                    alt="my image" onClick={() => {setLiked(!liked)}} /></button>               
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.caption}</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
            </div>
        </div>
    )
}

export default PostCard;
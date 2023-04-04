import "./PostCard.css";
import React, { useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'



// props: POST CLASS: title, caption, image, recipe, author...
// also, probably give user who posted?
const PostCard = (props) => {

    const [liked, setLiked] = useState(false);
    // const iconClass = liked? "liked" : "unliked"

    return (
        <div className="card">

            <div className="card-header">
                <div className="card-title">{props.title}</div>
                <div className="profile">
                    <div>
                        <img src={props.profile_pic_url} className="profile-pic"/>
                    </div>
                    <div className="card-user">{props.username}</div>

                </div>
            </div>
            

            <div className="card-image">
                    <img src={props.image_url} alt="" className="recipe-image"/>
            </div>
    
            
            <div className="utility-bar">
                <div className="like-button">
                    {liked ?
                        <FontAwesomeIcon icon={faHeartSolid} size="2xl" style={{color: "ff0000"}} onClick={() => {setLiked(false)}} />
                        :
                        <FontAwesomeIcon icon={faHeart} size="2xl" onClick={() => {setLiked(true)}} />
                        
                    }
                </div>

            </div>
                    
            
            <p className="card-text">{props.caption}</p>
            

            {/* should this view recipe button take us to another page or just expand the card? */}
            <a href="#" className="btn btn-primary">View Recipe</a>
        </div>

        
    )
}

export default PostCard;
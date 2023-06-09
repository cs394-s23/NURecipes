import "./PostCard.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Modal from "./PopUpModal.jsx";
import { updateLikes } from "../utilities/firebase";
import { useDbData } from "../utilities/firebase";
import { getAuth } from "@firebase/auth";
// props: POST CLASS: title, caption, image, recipe, author...
// also, probably give user who posted?
const PostCard = (props) => {
  let authData = getAuth();
  console.log("postcard props", props);

  props = props.props;
  const [liked, setLiked] = useState(false);

  // const iconClass = liked? "liked" : "unliked"

  const [show, setShow] = useState(false);
  const [data, error] = useDbData("/Users/" + props.uid);
  console.log(data);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (data != null) {
    return (
      <div className="card" data-cy="postcard">
        <div className="card-header">
          <div className="card-title">{props.title}</div>
          <div className="profile">
            <div className="pic-border">
              <img src={props.profile_pic_url} className="profile-pic" />
            </div>
            <div className="card-user">{props.username}</div>
            <div className="card-user">{data.major}</div>
            <div className="card-user">{data.year}</div>
            <div className="card-user">{data.dhall}</div>
          </div>
        </div>

        <div className="card-image">
          <img src={props.image_url} alt="" className="recipe-image" />
        </div>

        <div className="utility-bar">
          <div className="like-button">
            {liked ? (
              <FontAwesomeIcon
                icon={faHeartSolid}
                size="lg"
                style={{ color: "red" }}
                onClick={() => {
                  if (authData.currentUser != null) {
                    setLiked(false);
                    updateLikes(props.key, false);
                  }
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                onClick={() => {
                  if (authData.currentUser != null) {
                    setLiked(true);
                    updateLikes(props.key, true);
                  }
                }}
              />
            )}
          </div>
          <div className="like-count">{props.like_count}</div>
        </div>

        <div className="card-rating">
          <p className="rating">
            {" "}
            <strong>Cook time: </strong> {props.cook_time} minutes
          </p>
          <p className="rating">
            {" "}
            <strong> Cost: </strong> ${props.cost}{" "}
          </p>
        </div>

        <div className="card-caption">{props.caption}</div>

        {/* should this view recipe button take us to another page or just expand the card? */}
        <div className="modal-button">
          {show ? (
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={setShow(!show)}
                  />
                </div>
                <div className="modal-body">
                  <h1>Hello</h1>
                </div>
              </div>
            </div>
          ) : null}
          <div className="view-details-button">
            <Modal
              title={props.title}
              ingredients={props.recipe.ingredients}
              steps={props.recipe.steps}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PostCard;

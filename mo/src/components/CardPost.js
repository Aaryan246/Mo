import React from "react";
import "./style/card.css";
import data from "./data/cardData.json";
import { FaRegHeart, FaRegComment, FaShare } from "react-icons/fa";
import { IconContext } from "react-icons";
import Card from "react-bootstrap/Card";

function RenderPost(post) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="card-img" variant="top" src={post.post.image} />
      <Card.Body>
        <Card.Text>
          <IconContext.Provider
            value={{ size: "1.3rem", className: "global-class-name" }}
          >
            <div className="post-icons">
              <FaRegHeart className="heart" />
              <FaRegComment className="comment" />
              <FaShare className="share" />
            </div>
          </IconContext.Provider>
          {post.post.caption}
        </Card.Text>
        <div class="card__footer">
          <div class="user">
            <img
              src={post.post.userimg}
              alt="user__image"
              class="user__image"
            />
            <div class="user__info">
              <h5>{post.post.username}</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default function CardPost() {
  const post = data.post.map((post) => {
    return (
      <div key={post.id} className="cards">
        <RenderPost post={post} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="postDiv">{post}</div>
    </div>
  );
}

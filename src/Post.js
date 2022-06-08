import React from "react";
import './Post.css';

const Post = ( { name, publishDate, text, image } ) => {
    return(
        <div className="post">
            <div className="post-info">
                <img className="user" src="https://robohash.org/333"alt="user"></img>
                <div className="info">
                    <h3 className="author">{name}</h3>
                    <p className="time">{publishDate}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{text}</p>
            </div>
            <img className="post-img" src={image} alt=""></img>
        </div>
    )
}

export default Post;
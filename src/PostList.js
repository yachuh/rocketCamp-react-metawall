import React from "react";
import Post from "./Post";
import './PostList.css';
import { posts } from './posts';

const PostList = () => {
    return(
        <div className="container postList">
            {
                posts.map((post, i) => {
                    return(
                         <Post 
                            key={posts[i].id}
                            name={posts[i].owner.firstName + posts[i].owner.lastName}
                            publishDate={posts[i].publishDate} text={posts[i].text}
                            image={posts[i].image}
                        />
                    )
                })
            }
        </div>
    )
}

export default PostList;
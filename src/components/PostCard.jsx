import React from "react";


const PostCard = ({ type, title, description, author, views, image }) => {
  return (
    <div className="post-card">
      <img src={image} alt="Post" className="w-100" />
      <div className="post-card-body">
        <p className="fw-bold">{type}</p>
        <h5 className="fw-semibold mb-2">{title}</h5>
        <p className="text-muted mb-2">{description}</p>
        <div className="d-flex justify-between items-center">
          <span className="post-meta">
            {author} • {views} views
          </span>
          <button className="btn btn-outline-primary btn-sm">Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

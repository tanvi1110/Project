import React from "react";
import PostCard from "./PostCard";

const PostsSection = () => {
  const posts = [
    {
      type: "📝 Article",
      title: "What if famous brands had regular fonts?",
      description: "I’ve worked in UX for the better part of a decade. F...",
      author: "Sarthak Kamra",
      views: "1.4k",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      type: "🎓 Education",
      title: "Tax Benefits for Investment under...",
      description: "I’ve worked in UX for the better part of a decade. F...",
      author: "Sarah West",
      views: "4.8k",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      type: "📅 Meetup",
      title: "Finance & Investment Elite...",
      description: "Ahmedabad, India • Fri, 12 Oct 2018",
      author: "Ronal Jones",
      views: "800",
      image: "https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="p-3 posts-section">
      {/* Filter Section */}
      <div className="flex justify-between items-center mb-3">
        <span className="fw-bold">Posts (368)</span>
        <select className="form-select w-auto">
          <option>Filter: All</option>
          <option>Article</option>
          <option>Education</option>
          <option>Job</option>
        </select>
      </div>

      {/* Post Cards */}
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsSection;

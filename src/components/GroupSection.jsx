import React from "react";

const GroupSection = () => {
  return (
    <div className=" flex flex-col items-start justify-center container py-5">
      {/* Header Section */}
      <div className=" text-center mb-4">
        <h2 className="fw-bold">Groups</h2>
        <p className="text-muted">
          Explore groups to connect with like-minded individuals.
        </p>
      </div>

      {/* Group Cards Section */}
      <div className="row gap-4">
        {/* Group Card 1 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Group 1"
            />
            <div className="card-body">
              <h5 className="card-title">Photography Club</h5>
              <p className="card-text text-muted">
                Join our group to explore the art of photography and capture
                stunning moments together.
              </p>
              <button className="btn btn-primary w-100">Join Group</button>
            </div>
          </div>
        </div>

        {/* Group Card 2 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Group 2"
            />
            <div className="card-body">
              <h5 className="card-title">Fitness Enthusiasts</h5>
              <p className="card-text text-muted">
                Connect with fitness lovers to share tips, motivation, and
                workout plans.
              </p>
              <button className="btn btn-primary w-100">Join Group</button>
            </div>
          </div>
        </div>

        {/* Group Card 3 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Group 3"
            />
            <div className="card-body">
              <h5 className="card-title">Tech Innovators</h5>
              <p className="card-text text-muted">
                Collaborate with tech enthusiasts to discuss the latest trends
                and innovations.
              </p>
              <button className="btn btn-primary w-100">Join Group</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSection;

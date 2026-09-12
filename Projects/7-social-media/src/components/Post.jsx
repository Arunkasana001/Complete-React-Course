import { MdDeleteOutline } from "react-icons/md";

const Post = ({ post }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDeleteOutline />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-sucess reaction" role="alert"> A simple sucess alert-check it out !</div>

        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default Post;

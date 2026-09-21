import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const navigate = useNavigate();
  // const { addPost } = useContext(PostList);
  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  // event.preventDefault();
  // const userId = userIdElement.current.value;
  // const postTitle = postTitleElement.current.value;
  // const postBody = postBodyElement.current.value;
  // const reactions = Number(reactionsElement.current.value) || 0;
  // const tags = tagsElement.current.value.split(" ");

  // userIdElement.current.value = "";
  // postTitleElement.current.value = "";
  // postBodyElement.current.value = "";
  // reactionsElement.current.value = "";
  // tagsElement.current.value = "";

  return (
    <Form
      method="POST"
      className="create-post"
      //  onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          rows={4}
          className="form-control"
          id="title"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Number of reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          name="Number of reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter  tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split("");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  // navigate("/");
  return redirect("/");
}
// };
export default CreatePost;

import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelocomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList } = useContext(PostListData);

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <>
      {postList.length === 0 && (
        <WelocomeMessage onGetPostClick={handleGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;

import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelocomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);

  return (
    <>
    {postList.length === 0 && <WelocomeMessage /> }
      {postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </>
  );
};

export default PostList;

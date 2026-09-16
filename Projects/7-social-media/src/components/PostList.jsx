import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelocomeMessage from "./WelcomeMessage";
 
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false);
  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetched(true);
  }

  // const handleGetPostClick = () => {};
  return (
    <>
      {postList.length === 0 && (
        <WelocomeMessage
        //  onGetPostClick={handleGetPostClick}
        />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;

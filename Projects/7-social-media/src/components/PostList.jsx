import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelocomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const loadedPosts = useLoaderData();
  const { postList, addInitialPosts } = useContext(PostListData);

  useEffect(() => {
    addInitialPosts(loadedPosts);
  }, [loadedPosts, addInitialPosts]);

  // const handleGetPostClick = () => {};
  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
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

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const savedPosts = JSON.parse(
        localStorage.getItem("createdPosts") || "[]",
      );
      return [...savedPosts, ...data.posts];
    });
};

export default PostList;

import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelocomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);
  
  // const handleGetPostClick = () => {};
  return (
    <>
      {fetching  && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelocomeMessage
        //  onGetPostClick={handleGetPostClick}
        />
      )}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;

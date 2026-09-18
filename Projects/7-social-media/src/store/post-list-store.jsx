import { createContext, useCallback, useMemo, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    // DEFAULT_POST_LIST,
    [],
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList],
  );

  // useMemo() :-
  // const arr = [5, 2, 6, 7, 4];
  // const sortedArr = useMemo(() => arr.sort(), [arr]);
  // console.log(sortedArr);

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
// const DEFAULT_POST_LIST = [
//   {
//     id: "2",
//     title: "Pass ho gye bhai",
//     body: "4 saal ki masti k baad bhi ho gye hai pass, Hard to believe.",
//     reactions: 15,
//     userId: "use-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

export default PostListProvider;

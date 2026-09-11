import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);
const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends,  I am going to MUmbai for a vacation.Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho gye bhai",
    body: "4 saal ki masti k baad bhi ho gye hai pass, Hard to believe.",
    reactions: 15,
    userId: "use-12",
    tags: ["Graduating", "Unbelievable"],
  },
];
console.log(DEFAULT_POST_LIST);

export default PostListProvider;

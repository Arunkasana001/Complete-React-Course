import {
  createContext,
  useCallback,
  useMemo,
  useEffect,
  useState,
  useReducer,
} from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  // fetching: false,
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
  // const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = useCallback((posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  }, []);
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });

      const savedPosts = JSON.parse(
        localStorage.getItem("createdPosts") || "[]",
      );
      localStorage.setItem(
        "createdPosts",
        JSON.stringify(savedPosts.filter((post) => post.id !== postId)),
      );
    },
    [dispatchPostList],
  );

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });
  //   return () => {
  //     console.log("Cleaning up UseEffect.");
  //     controller.abort();
  //   };
  // }, []);
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

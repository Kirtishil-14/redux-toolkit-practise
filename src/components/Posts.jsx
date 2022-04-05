import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getPost } from "../features/PostSlice";
import Spinner from "./Spinner";

const Posts = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => ({ ...state.app }));

  const handleFetchData = (e) => {
    e.preventDefault();
    if (!id) window.alert("enter id");
    else {
      dispatch(getPost({ id }));
      setId("");
    }
  };

  const handleDelete = ({ id }) => {
    dispatch(deletePost({ id: post[0].id }));
    window.alert("deleted successfully");
  };

  return (
    <>
      <div>
        <input
          type="number"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit" onClick={handleFetchData}>
          Fetch
        </button>
        <button type="button">Create</button>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {post.length > 0 && (
              <div style={{ border: "1px solid" }}>
                <h1>{post[0].title}</h1>
                <p>{post[0].body}</p>
                <button>Edit</button>
                <button onClick={() => handleDelete(post[0].id)}>Delete</button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Posts;

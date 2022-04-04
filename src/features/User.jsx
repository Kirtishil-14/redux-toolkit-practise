import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUserName } from "./userSlice";

const User = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [newusername, setNewUserName] = useState("");
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <>
      <br />
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            )
          }
        >
          Add User
        </button>
      </div>
      <div>
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <br />
              <span>{user.name}</span>: <span>{user.username}</span>
              <section>
                <input
                  type="text"
                  placeholder="new username"
                  onChange={(e) => setNewUserName(e.target.value)}
                />
                <button
                  onClick={() =>
                    dispatch(
                      updateUserName({ id: user.id, username: newusername })
                    )
                  }
                >
                  Update
                </button>
                <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                  Delete
                </button>
              </section>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default User;

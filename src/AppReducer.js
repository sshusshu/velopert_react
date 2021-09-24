import React, { useReducer, useState, useRef, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    { id: 1, username: "sshu", email: "subin9033@gmail.com", active: true },
    { id: 2, username: "hoon", email: "subin9044@gmail.com", active: false },
    { id: 3, username: "test", email: "subin9055@gmail.com", active: false },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };

    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    default:
      return state;
  }
}
function AppReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { email, username } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} />
      <UserList users={users} />
      <div>활성 사용자 수: 0</div>
    </>
  );
}

export default AppReducer;

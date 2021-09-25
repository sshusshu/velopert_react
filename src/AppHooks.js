import React, { useReducer, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
function countActiveUsers(users) {
  console.log("사용자 카운팅..");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    { id: 1, username: "sshu", email: "subin9033@gmail.com", active: true },
    { id: 2, username: "hoon", email: "subin9044@gmail.com", active: false },
    { id: 3, username: "test", email: "subin9055@gmail.com", active: false },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: state.users.concat(action.user),
      };
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "TOGGLE_USER":
      return {
        users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
      };
    default:
      return state;
  }
}
export const UserDispatch = React.createContext(null);

function AppHooks() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default AppHooks;

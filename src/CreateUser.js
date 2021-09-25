import React, { useRef, useContext } from "react";
import { UserDispatch } from "./AppHooks";
import useInput from "./hooks/useinput";

function CreateUser() {
  const dispatch = useContext(UserDispatch);
  const nextId = useRef(4);

  const [{ username, email }, onChange, reset] = useInput({ username: "", email: "" });
  const onCreate = () => {
    dispatch({ type: "CREATE_USER", user: { id: nextId.current, username, email } });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input name="username" placeholder="계정명" onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
export default React.memo(CreateUser);

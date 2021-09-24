import React, { useState, useRef } from "react";
function InputSample() {
  const [inputs, setInputs] = useState({
    age: "",
    nickname: "",
    address: "",
  });
  const ageInput = useRef();
  const { age, nickname, address } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      age: "",
      nickname: "",
      address: "",
    });
    ageInput.current.focus();
  };
  return (
    <div>
      <input placeholder="나이" onChange={onChange} name="age" value={age} ref={ageInput} />
      <input placeholder="닉네임" onChange={onChange} name="nickname" value={nickname} />
      <input placeholder="주소" onChange={onChange} name="address" value={address} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {age}({nickname}) / {address}
      </div>
    </div>
  );
}
export default InputSample;

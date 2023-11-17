import React, { memo } from "react";

const Child = ({ name, age }) => {
  console.log("👨‍🦲자녀도 렌더링");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>🧚‍♀️자녀</h3>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
    </div>
  );
};

export default memo(Child);

import React, { memo } from "react";

const Child = ({name, tellme}) => {
  console.log("👨‍🦲자녀도 렌더링");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>🧚‍♀️자녀</h3>
      <p>이름 : {name}</p>
      <button onClick={tellme}>엄마 나 사랑해?</button>
    </div>
  );
};

export default memo(Child);

import React from "react";

const Child = () => {
  console.log("👨‍🦲자녀도 렌더링");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>🧚‍♀️자녀</h3>
      <p>이름 : 홍길동</p>
      <p>나이 : 5</p>
    </div>
  );
};

export default Child;

import React from "react";
import { useSelector } from "react-redux";

const UserTest = () => {
  const test = useSelector((state) => state.users.users);
  console.log(test);

  return (
    <>
      <h1>Test here</h1>

      {test.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
          <h3>{user.website}</h3>
        </div>
      ))}
    </>
  );
};

export default UserTest;

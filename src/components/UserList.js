import React from "react";

import userResources from "./useResources";

const UserList = () => {
  const users = userResources("users");

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;

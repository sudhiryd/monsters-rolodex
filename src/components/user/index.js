import React from "react";
import useFetch from "../../effects/useFetch";

const Users = ({ userId }) => {
  const user = useFetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );
  return (
    <>
      {user ? (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Data not found</p>
      )}
    </>
  );
};

export default Users;

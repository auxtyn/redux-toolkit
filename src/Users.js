// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUsers } from "./features/UsersSlice";

// const Users = () => {
//   const dispatch = useDispatch();

//   // ✅ Select users from Redux store
//   const people = useSelector((state) => state.users.users);

//   useEffect(() => {
//     axios("https://jsonplaceholder.typicode.com/users")
//       .then((response) => dispatch(setUsers(response.data)))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, [dispatch]);

//   console.log(people);

//   return (
//     <div>
//       <h2>Users List</h2>
//       {people.map((user) => (
//         <div key={user.id} style={styles.userCard}>
//           <h3>{user.name}</h3>
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {user.phone}
//           </p>
//           <p>
//             <strong>Website:</strong>{" "}
//             <a
//               href={`https://${user.website}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {user.website}
//             </a>
//           </p>
//         </div>
//       ))}

//       {/* // <p>Loading users...</p> // ✅ Loading message */}
//     </div>
//   );
// };

// // ✅ Inline styles for better UI
// const styles = {
//   userCard: {
//     border: "1px solid #ddd",
//     padding: "10px",
//     margin: "10px 0",
//     borderRadius: "5px",
//     boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
//   },
// };

// export default Users;



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/UsersSlice";

const Users = () => {
  const dispatch = useDispatch();

  // Select the users, loading, and error state
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); // Dispatch the fetchUsers action
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users: {error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={styles.userCard}>
            <h3>{user.name}</h3>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </p>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
 </div>
  );
};

// Inline styles for better UI
const styles = {
  userCard: {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
};

export default Users;


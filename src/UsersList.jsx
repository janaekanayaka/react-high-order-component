import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json)
        .then((json) => setUsers(json))
        .catch((err) => console.log(err));
    };
    fetchUsers();
  }, []);

  const filteredData = users.filter((el) => {
    return el.name.toLowerCase().indexof(query.toLowerCase()) >= 0
  })

  return (
  <div>
    <p>You search for: {query}</p>
    <input type={"text"} value={query} onChange={(e)=> setQuery(e.target.value)}/>
    {filteredData.length === 0 ? <h1>Data not found</h1> : ( filteredData.map(value => {
        return <p key={value.id}>{value.name}</p>
    }))}
  </div>
  );
};

export default UsersList;

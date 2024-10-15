import React from 'react';
import HOC from './Hoc.jsx';

const UsersList = (props) => {
  return (
    <div>
      {props.data.length === 0 ? (
        <h1>data not found</h1>
      ) : (
        props.data.map(value => (
          <p key={value.id}>{value.name}</p>
        ))
      )}
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users");
export default SearchUsers;